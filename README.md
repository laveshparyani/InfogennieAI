# InfogennieAI - Data Analytics Platform

InfogennieAI is a powerful data analytics platform that helps users visualize and analyze their data through various interactive charts and graphs.

## Features

### Graph Generation
- **Multiple Chart Types**: Support for various chart types including:
  - Line Graph
  - Bar Chart
  - Pie Chart
  - Scatter Plot
  - Area Chart
  - Bubble Chart
  - Radar Chart
  - Polar Area Chart
  - Doughnut Chart

- **Data Source Support**:
  - CSV files
  - XLSX files
  - JSON files
  - Google Spreadsheet
  - Microsoft SQL

- **Interactive Visualizations**:
  - Responsive design
  - Zoom and pan capabilities
  - Interactive legends
  - Downloadable charts
  - Customizable layouts

## Tech Stack

### Frontend
- React.js
- Plotly.js for interactive charts
- Tailwind CSS for styling
- Papa Parse for CSV parsing
- XLSX for Excel file handling

### Backend
- Django REST Framework
- Pandas for data manipulation
- Plotly Express for graph generation
- NumPy for numerical operations

## Installation

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- pip (Python package manager)
- Git

### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate a virtual environment:
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run migrations:
```bash
python manage.py migrate
```

5. Start the backend server:
```bash
python manage.py runserver 8080
```

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Usage

1. **Select Data Source**:
   - Choose your data source type from the dropdown
   - Click "Choose File" to upload your data file

2. **Select Chart Type**:
   - Choose from various chart types in the dropdown menu
   - Each chart type is optimized for different kinds of data visualization

3. **Generate Graph**:
   - Click "Generate Graph" to create the visualization
   - The graph will automatically adjust based on your data

4. **Interact with the Graph**:
   - Zoom in/out using the mouse wheel or pinch gesture
   - Pan by clicking and dragging
   - Toggle data series using the legend
   - Download the graph as PNG using the camera icon

## Data Format Requirements

- CSV/XLSX files should have headers
- Required columns for optimal visualization:
  - Date: Temporal data (YYYY-MM-DD format)
  - Sales: Numeric values
  - Quantity: Numeric values
  - Category: Categorical values
  - Other columns will be automatically detected and used where appropriate

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team. 