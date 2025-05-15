import React from 'react';
import Plot from 'react-plotly.js';

const GraphRenderer = ({ graphData }) => {
  if (!graphData) return null;

  return (
    <div className="w-full h-full">
      <Plot
        data={graphData.data}
        layout={{
          ...graphData.layout,
          autosize: true,
          height: 500,
          width: undefined
        }}
        config={{
          responsive: true,
          displayModeBar: true,
          displaylogo: false,
          modeBarButtonsToRemove: ['lasso2d', 'select2d']
        }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
    </div>
  );
};

export default GraphRenderer; 