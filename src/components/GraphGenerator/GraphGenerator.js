import React, { useState } from 'react';
import { FaUpload, FaChartBar } from 'react-icons/fa';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import GraphRenderer from './GraphRenderer';

const GraphGenerator = () => {
  const [data, setData] = useState(null);
  const [dataSource, setDataSource] = useState(null);
  const [selectedGraphType, setSelectedGraphType] = useState('line');
  const [graphs, setGraphs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fileType, setFileType] = useState('csv');

  const fileTypes = [
    // Enabled Options
    { id: 'csv', label: 'CSV File', disabled: false },
    { id: 'xlsx', label: 'XLSX File', disabled: false },
    { id: 'json', label: 'JSON File', disabled: false },
    { id: 'googlesheet', label: 'Google Spreadsheet', disabled: false },
    { id: 'mssql', label: 'Microsoft SQL', disabled: false },
    // Disabled Options
    { id: 'xml', label: 'XML File', disabled: true },
    { id: 'xlx', label: 'XLX File', disabled: true },
    { id: 'pdf', label: 'PDF File', disabled: true },
    { id: 'png', label: 'PNG File', disabled: true },
    { id: 'jpeg', label: 'JPEG File', disabled: true },
    { id: 'mp4', label: 'MP4 File', disabled: true },
    { id: 'mysql', label: 'MySQL', disabled: true },
    { id: 'mongodb', label: 'MongoDB', disabled: true },
    { id: 'snowflake', label: 'Snowflake', disabled: true },
    { id: 'airtable', label: 'Airtable', disabled: true },
    { id: 'postgresql', label: 'PostgreSQL', disabled: true }
  ];

  const graphTypes = [
    { id: 'line', label: 'Line Graph' },
    { id: 'bar', label: 'Bar Chart' },
    { id: 'pie', label: 'Pie Chart' },
    { id: 'scatter', label: 'Scatter Plot' },
    { id: 'area', label: 'Area Chart' },
    { id: 'bubble', label: 'Bubble Chart' },
    { id: 'radar', label: 'Radar Chart' },
    { id: 'polar', label: 'Polar Area Chart' },
    { id: 'doughnut', label: 'Doughnut Chart' }
  ];

  const handleFileUpload = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      let parsedData;
      const fileExtension = file.name.split('.').pop().toLowerCase();

      if (fileExtension === 'csv') {
        parsedData = await parseCSV(file);
      } else if (fileExtension === 'xlsx') {
        parsedData = await parseXLSX(file);
      } else if (fileExtension === 'json') {
        parsedData = await parseJSON(file);
      } else {
        throw new Error('Unsupported file type');
      }

      setData(parsedData);
      setDataSource(file.name);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const parseCSV = (file) => {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        complete: (results) => resolve(results.data),
        header: true,
        error: (error) => reject(error)
      });
    });
  };

  const parseXLSX = async (file) => {
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    return XLSX.utils.sheet_to_json(worksheet);
  };

  const parseJSON = async (file) => {
    const text = await file.text();
    const json = JSON.parse(text);
    return Array.isArray(json) ? json : json.data || Object.values(json)[0];
  };

  const handleGenerateGraph = async () => {
    if (!data) return;

    setLoading(true);
    try {
      const response = await generateGraph(data, selectedGraphType);
      setGraphs([response]);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Build a Plotly figure entirely in the browser from the uploaded rows.
  // This keeps the app fully static (works on Vercel with no backend). The
  // Django backend in /backend remains as a reference implementation.
  const generateGraph = (rows, type) => {
    if (!Array.isArray(rows) || rows.length === 0) {
      throw new Error('No data to plot. Please upload a file first.');
    }

    const toNum = (v) => {
      const n = Number(v);
      return Number.isNaN(n) ? null : n;
    };
    const uniq = (arr) => [...new Set(arr)];

    const columns = Object.keys(rows[0] || {});
    const numericCols = columns.filter((c) => {
      const vals = rows.map((r) => r[c]).filter((v) => v !== '' && v !== null && v !== undefined);
      return vals.length > 0 && vals.every((v) => !Number.isNaN(Number(v)));
    });
    const categoricalCols = columns.filter((c) => !numericCols.includes(c));

    if (numericCols.length === 0) {
      throw new Error('No numeric column found. Please include at least one numeric column.');
    }

    const xKey = columns.find((c) => /date|time|year|month/i.test(c)) || categoricalCols[0] || columns[0];
    const yKey =
      numericCols.find((c) => /sales|revenue|amount|value|total|price/i.test(c)) ||
      numericCols.find((c) => c !== xKey) ||
      numericCols[0];
    const colorKey = categoricalCols.find((c) => c !== xKey);
    const sizeKey =
      numericCols.find((c) => /quantity|qty|size|count|volume/i.test(c) && c !== yKey) ||
      numericCols.find((c) => c !== yKey);

    const groups = colorKey ? uniq(rows.map((r) => r[colorKey])) : [null];
    const rowsFor = (g) => (g === null ? rows : rows.filter((r) => r[colorKey] === g));
    const nameFor = (g) => (g === null ? yKey : String(g));

    const xyTraces = (mode, extra = {}) =>
      groups.map((g) => {
        const rs = rowsFor(g);
        return {
          type: 'scatter',
          mode,
          name: nameFor(g),
          x: rs.map((r) => r[xKey]),
          y: rs.map((r) => toNum(r[yKey])),
          ...extra,
        };
      });

    // Aggregate y by category for pie/doughnut/polar/radar
    const catKey = colorKey || xKey;
    const totals = {};
    rows.forEach((r) => {
      const k = r[catKey];
      totals[k] = (totals[k] || 0) + (toNum(r[yKey]) || 0);
    });
    const labels = Object.keys(totals);
    const values = Object.values(totals);

    let data;
    let layout = { title: '', autosize: true };
    const axisLayout = { xaxis: { title: xKey }, yaxis: { title: yKey } };

    switch (type) {
      case 'bar':
        data = groups.map((g) => {
          const rs = rowsFor(g);
          return { type: 'bar', name: nameFor(g), x: rs.map((r) => r[xKey]), y: rs.map((r) => toNum(r[yKey])) };
        });
        layout = { ...layout, ...axisLayout, barmode: 'group', title: `${yKey} by ${xKey}` };
        break;
      case 'area':
        data = xyTraces('lines', { fill: 'tozeroy' });
        layout = { ...layout, ...axisLayout, title: `${yKey} over ${xKey}` };
        break;
      case 'scatter':
        data = xyTraces('markers');
        layout = { ...layout, ...axisLayout, title: `${yKey} vs ${xKey}` };
        break;
      case 'bubble':
        data = groups.map((g) => {
          const rs = rowsFor(g);
          return {
            type: 'scatter',
            mode: 'markers',
            name: nameFor(g),
            x: rs.map((r) => r[xKey]),
            y: rs.map((r) => toNum(r[yKey])),
            marker: {
              size: rs.map((r) => (sizeKey ? Math.abs(toNum(r[sizeKey]) || 0) : 10)),
              sizemode: 'area',
              sizeref: sizeKey ? Math.max(...rows.map((r) => Math.abs(toNum(r[sizeKey]) || 0)), 1) / 900 : 1,
              sizemin: 4,
            },
          };
        });
        layout = { ...layout, ...axisLayout, title: `${yKey} vs ${xKey}${sizeKey ? ` (size: ${sizeKey})` : ''}` };
        break;
      case 'pie':
        data = [{ type: 'pie', labels, values }];
        layout = { ...layout, title: `${yKey} by ${catKey}` };
        break;
      case 'doughnut':
        data = [{ type: 'pie', labels, values, hole: 0.5 }];
        layout = { ...layout, title: `${yKey} by ${catKey}` };
        break;
      case 'radar':
        data = [{ type: 'scatterpolar', r: values, theta: labels, fill: 'toself', name: yKey }];
        layout = { ...layout, title: `${yKey} by ${catKey}`, polar: { radialaxis: { visible: true } } };
        break;
      case 'polar':
        data = [{ type: 'barpolar', r: values, theta: labels }];
        layout = { ...layout, title: `${yKey} by ${catKey}`, polar: { radialaxis: { visible: true } } };
        break;
      case 'line':
      default:
        data = xyTraces('lines');
        layout = { ...layout, ...axisLayout, title: `${yKey} over ${xKey}` };
        break;
    }

    return { data, layout };
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Graph Generator</h2>
        
        {/* File Upload Section */}
        <div className="mb-8">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Data Source
            </label>
            <select
              value={fileType}
              onChange={(e) => setFileType(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {fileTypes.map(type => (
                <option 
                  key={type.id} 
                  value={type.id} 
                  disabled={type.disabled}
                  className={type.disabled ? 'text-gray-400' : 'text-gray-900'}
                >
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <label className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700">
              <FaUpload className="mr-2" />
              <span>Choose File</span>
              <input
                type="file"
                className="hidden"
                accept={`.${fileType}`}
                onChange={handleFileUpload}
              />
            </label>
            {dataSource && (
              <span className="text-gray-600">Current file: {dataSource}</span>
            )}
          </div>
        </div>

        {/* Graph Type Selection */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Graph Type
          </label>
          <select
            value={selectedGraphType}
            onChange={(e) => setSelectedGraphType(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            {graphTypes.map(type => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerateGraph}
          disabled={!data || loading}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              <span>Generating...</span>
            </>
          ) : (
            <>
              <FaChartBar className="mr-2" />
              <span>Generate Graph</span>
            </>
          )}
        </button>

        {/* Error Display */}
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Generated Graph */}
        <div className="mt-8 h-[600px]">
          {graphs.map((graph, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg h-full">
              <div className="w-full h-full">
                <GraphRenderer graphData={graph} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphGenerator; 