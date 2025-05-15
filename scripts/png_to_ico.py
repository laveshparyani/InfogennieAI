from PIL import Image
import os

def png_to_ico(input_path, output_path):
    try:
        # Open the PNG file
        img = Image.open(input_path)
        
        # Create different sizes
        sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
        icons = []
        
        for size in sizes:
            # Create a copy of the image for this size
            resized_img = img.copy()
            resized_img.thumbnail(size, Image.Resampling.LANCZOS)
            icons.append(resized_img)
        
        # Save as ICO with all sizes
        icons[0].save(
            output_path,
            format='ICO',
            sizes=sizes,
            append_images=icons[1:]
        )
        
        print(f"Successfully created {output_path}")
        return True
        
    except Exception as e:
        print(f"Error creating ICO file: {str(e)}")
        return False

if __name__ == '__main__':
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_dir = os.path.dirname(script_dir)
    
    input_path = os.path.join(project_dir, 'public', 'logos', 'favicon.png')
    output_path = os.path.join(project_dir, 'public', 'favicon.ico')
    
    png_to_ico(input_path, output_path) 