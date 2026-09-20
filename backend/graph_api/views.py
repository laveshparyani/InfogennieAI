from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import logging
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import json
from datetime import datetime

logger = logging.getLogger(__name__)

@api_view(['POST'])
def generate_graph(request):
    try:
        data = request.data
        print("Received data:", data)
        
        # Create DataFrame and convert numeric columns
        df = pd.DataFrame(data['data'])
        
        # Convert Sales and Quantity to numeric
        df['Sales'] = pd.to_numeric(df['Sales'], errors='coerce')
        df['Quantity'] = pd.to_numeric(df['Quantity'], errors='coerce')
        
        # Convert Date to datetime
        df['Date'] = pd.to_datetime(df['Date'])
        
        print("DataFrame info:", df.info())
        print("DataFrame head:", df.head())
        
        graph_type = data['type']
        columns = data.get('columns', df.columns.tolist())

        # Analyze the data columns
        numeric_cols = df.select_dtypes(include=['int64', 'float64']).columns
        categorical_cols = df.select_dtypes(include=['object']).columns
        
        if len(numeric_cols) == 0:
            raise ValueError("No numeric columns found in the data. Please ensure your data contains at least one numeric column.")

        # Default configurations
        x_axis = 'Date'
        y_axis = 'Sales'
        size_col = 'Quantity'
        color_by = 'Category'

        # Generate graph based on type
        if graph_type == 'line':
            fig = px.line(df, x=x_axis, y=y_axis, color=color_by, title='Sales Over Time by Category')
        elif graph_type == 'bar':
            fig = px.bar(df, x=x_axis, y=y_axis, color=color_by, title='Sales by Date and Category')
        elif graph_type == 'pie':
            fig = px.pie(df, values=y_axis, names=color_by, title='Sales Distribution by Category')
        elif graph_type == 'scatter':
            fig = px.scatter(df, x=x_axis, y=y_axis, color=color_by, title='Sales vs Date')
        elif graph_type == 'area':
            fig = px.area(df, x=x_axis, y=y_axis, color=color_by, title='Cumulative Sales by Category')
        elif graph_type == 'bubble':
            fig = px.scatter(df, x=x_axis, y=y_axis, size=size_col, color=color_by, 
                           title='Sales vs Date (Size: Quantity)', size_max=30)
        elif graph_type == 'radar':
            # For radar chart, we need to aggregate data
            df_agg = df.groupby('Category')[['Sales', 'Quantity']].mean().reset_index()
            fig = px.line_polar(df_agg, r='Sales', theta='Category', title='Average Sales by Category')
        elif graph_type == 'polar':
            # For polar chart, we need to aggregate data
            df_agg = df.groupby('Category')[['Sales']].sum().reset_index()
            fig = px.scatter_polar(df_agg, r='Sales', theta='Category', title='Total Sales by Category')
        elif graph_type == 'doughnut':
            df_agg = df.groupby('Category')[['Sales']].sum().reset_index()
            fig = px.pie(df_agg, values='Sales', names='Category', hole=0.3, title='Sales Distribution by Category')
        else:
            fig = px.line(df, x=x_axis, y=y_axis, color=color_by, title='Sales Over Time by Category')

        # Update layout
        fig.update_layout(
            template='plotly_white',
            margin=dict(t=50, l=50, r=50, b=50),
            showlegend=True,
            legend=dict(
                yanchor="top",
                y=0.99,
                xanchor="left",
                x=0.01
            ),
            height=500  # Set a fixed height
        )

        # Convert to JSON-serializable format
        graph_json = fig.to_json()
        graph_data = json.loads(graph_json)

        return Response({
            'success': True,
            'graph': graph_data,
            'message': 'Graph generated successfully'
        })

    except Exception:
        # Log the full error server-side, but do not leak exception details to the client.
        logger.exception("Error generating graph")
        return Response({
            'success': False,
            'error': 'Failed to generate graph. Please check your data and try again.'
        }, status=status.HTTP_400_BAD_REQUEST)