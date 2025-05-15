import pandas as pd
import numpy as np
from typing import Dict, Any, List
import re

def analyze_prompt(prompt: str) -> Dict[str, Any]:
    """Analyze the prompt to determine graph type and requirements."""
    prompt = prompt.lower()
    
    # Define graph type patterns
    patterns = {
        'line': r'line|trend|over time|timeline',
        'bar': r'bar|column|comparison',
        'pie': r'pie|distribution|percentage|proportion',
        'scatter': r'scatter|correlation|relationship',
        'bubble': r'bubble|three.?dimension|3d',
        'area': r'area|cumulative|stacked',
        'donut': r'donut|doughnut',
    }
    
    # Determine graph type
    graph_type = 'line'  # default
    for type_name, pattern in patterns.items():
        if re.search(pattern, prompt):
            graph_type = type_name
            break
    
    return {
        'type': graph_type,
        'multiple': bool(re.search(r'multiple|many|several', prompt)),
        'stacked': bool(re.search(r'stack|cumulative', prompt)),
        'percentage': bool(re.search(r'percent|ratio', prompt))
    }

def prepare_data(df: pd.DataFrame, analysis: Dict[str, Any]) -> Dict[str, Any]:
    """Prepare data for visualization based on analysis."""
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    categorical_cols = df.select_dtypes(include=['object']).columns
    
    if len(numeric_cols) == 0:
        raise ValueError("No numeric columns found in the dataset")
    
    result = {
        'type': analysis['type'],
        'data': {
            'labels': [],
            'datasets': []
        }
    }
    
    if analysis['type'] in ['line', 'bar']:
        # For time series or categorical comparisons
        if len(categorical_cols) > 0:
            label_col = categorical_cols[0]
            result['data']['labels'] = df[label_col].tolist()
            
            for col in numeric_cols:
                dataset = {
                    'label': col,
                    'data': df[col].tolist(),
                    'fill': analysis['type'] == 'area'
                }
                result['data']['datasets'].append(dataset)
        else:
            result['data']['labels'] = df.index.tolist()
            for col in numeric_cols:
                result['data']['datasets'].append({
                    'label': col,
                    'data': df[col].tolist()
                })
    
    elif analysis['type'] in ['pie', 'donut']:
        # For distribution graphs
        numeric_col = numeric_cols[0]
        if len(categorical_cols) > 0:
            label_col = categorical_cols[0]
            data = df.groupby(label_col)[numeric_col].sum()
            result['data']['labels'] = data.index.tolist()
            result['data']['datasets'] = [{
                'data': data.values.tolist(),
                'backgroundColor': generate_colors(len(data))
            }]
    
    elif analysis['type'] == 'scatter':
        # For correlation graphs
        if len(numeric_cols) >= 2:
            result['data']['labels'] = df.index.tolist()
            result['data']['datasets'] = [{
                'label': f'{numeric_cols[0]} vs {numeric_cols[1]}',
                'data': [{'x': x, 'y': y} for x, y in zip(
                    df[numeric_cols[0]].tolist(),
                    df[numeric_cols[1]].tolist()
                )]
            }]
    
    return result

def generate_colors(n: int) -> List[str]:
    """Generate n distinct colors."""
    colors = [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#FF6384', '#C9CBCF', '#4BC0C0', '#FF9F40'
    ]
    while len(colors) < n:
        colors.extend(colors[:n - len(colors)])
    return colors[:n]

def generate_graph_data(prompt: str, df: pd.DataFrame) -> Dict[str, Any]:
    """Main function to generate graph data based on prompt and DataFrame."""
    try:
        # Analyze the prompt
        analysis = analyze_prompt(prompt)
        
        # Prepare the data
        graph_data = prepare_data(df, analysis)
        
        # Add configuration based on analysis
        graph_data['options'] = {
            'responsive': True,
            'maintainAspectRatio': True,
            'plugins': {
                'title': {
                    'display': True,
                    'text': prompt.capitalize()
                },
                'legend': {
                    'display': True,
                    'position': 'top'
                }
            }
        }
        
        if analysis['type'] in ['pie', 'donut']:
            graph_data['options']['cutout'] = '50%' if analysis['type'] == 'donut' else '0'
        
        if analysis['stacked'] and analysis['type'] in ['bar', 'line']:
            graph_data['options']['scales'] = {
                'x': {'stacked': True},
                'y': {'stacked': True}
            }
        
        return graph_data
    
    except Exception as e:
        raise Exception(f"Error generating graph: {str(e)}") 