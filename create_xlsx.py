import pandas as pd

# Read the CSV file
df = pd.read_csv('datasources/sample_data.csv')

# Save as XLSX
df.to_excel('datasources/sample_data.xlsx', index=False) 