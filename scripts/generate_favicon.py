from cairosvg import svg2png
from PIL import Image
import io

# Read the SVG file
with open('../public/logo.svg', 'rb') as svg_file:
    svg_data = svg_file.read()

# Convert SVG to PNG in memory
png_data = svg2png(bytestring=svg_data, output_width=256, output_height=256)

# Create PIL Image from PNG data
img = Image.open(io.BytesIO(png_data))

# Create different sizes
sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
icons = []

for size in sizes:
    resized_img = img.resize(size, Image.Resampling.LANCZOS)
    icons.append(resized_img)

# Save as ICO
icons[0].save(
    '../public/favicon.ico',
    format='ICO',
    sizes=sizes,
    append_images=icons[1:]
) 