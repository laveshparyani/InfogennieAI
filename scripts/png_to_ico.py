from PIL import Image

def png_to_ico(input_path, output_path):
    # Open the PNG file
    img = Image.open(input_path)

    # Create different sizes
    sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    icons = []

    for size in sizes:
        resized_img = img.resize(size, Image.Resampling.LANCZOS)
        icons.append(resized_img)

    # Save as ICO
    icons[0].save(
        output_path,
        format='ICO',
        sizes=sizes,
        append_images=icons[1:]
    )

if __name__ == '__main__':
    png_to_ico('favicon.png', '../public/favicon.ico') 