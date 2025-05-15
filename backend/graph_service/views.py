from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
import pandas as pd
import numpy as np
from .graph_utils import generate_graph_data

@csrf_exempt
@require_http_methods(["POST"])
def generate_graph(request):
    try:
        data = json.loads(request.body)
        prompt = data.get('prompt')
        dataset = data.get('data')
        
        if not prompt or not dataset:
            return JsonResponse({
                'error': 'Missing prompt or data'
            }, status=400)

        # Convert data to pandas DataFrame
        df = pd.DataFrame(dataset)
        
        # Generate graph data based on prompt
        graph_data = generate_graph_data(prompt, df)
        
        return JsonResponse(graph_data)
    
    except Exception as e:
        return JsonResponse({
            'error': str(e)
        }, status=500) 