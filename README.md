# InfogennieAI - Data Analytics Platform

InfogennieAI is a powerful data analytics platform that helps users visualize and analyze their data through various interactive charts and graphs.

**Live demo:** https://infogennie-ai.vercel.app/

Graph generation runs entirely in the browser (parsing and charting happen client-side with Papa Parse, SheetJS, and Plotly), so the live demo works with no backend. A Django REST backend is included in `backend/` as an optional reference implementation.

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

### Backend Setup (optional)

The frontend generates graphs client-side, so the backend is **not required** to run the app. These
steps are only needed if you want to run the reference Django API.

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

### Frontend Setup (the app)
1. From the repository root, install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`. Open **Features > Graph Generation**,
upload a CSV/XLSX/JSON file, pick a chart type, and click **Generate Graph**.

> Build note: this is a Create React App project and CI builds treat ESLint warnings as errors, so
> keep `npm run build` warning-free.

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

InfogennieAI is a proprietary portfolio project, so it is not open for external code contributions
or redistribution. Bug reports and suggestions are welcome via GitHub issues. See
[CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## License

**Proprietary - all rights reserved.** This project was built from scratch by Lavesh Paryani and is
published for portfolio and evaluation purposes only. You may view the source, but you may not use,
copy, modify, redistribute, or sell it without prior written permission. See the [LICENSE](LICENSE)
file for the full terms.

## Support

For questions, open an issue in the GitHub repository. For security reports, follow
[SECURITY.md](.github/SECURITY.md). For licensing or permission requests, contact the author via
[GitHub](https://github.com/laveshparyani).