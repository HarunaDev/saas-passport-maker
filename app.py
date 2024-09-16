from flask import Flask, render_template, request, redirect, url_for, send_from_directory
import os
import threading
import time
from removebg import RemoveBg
from io import BytesIO
from PIL import Image

app = Flask(__name__)

# Set a folder to save uploaded images
UPLOAD_FOLDER = 'static/uploads/'
PROCESSED_FOLDER = 'static/processed/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['PROCESSED_FOLDER'] = PROCESSED_FOLDER

# Initialize RemoveBg with your API key
REMOVE_BG_API_KEY = 'your_remove_bg_api_key'
remove_bg = RemoveBg(REMOVE_BG_API_KEY, "error.log")

# Home route
@app.route("/")
def index():
    return render_template("index.html")

# About route
@app.route("/about")
def about():
    return render_template("about.html")

# Product route 
@app.route("/product")
def product():
    return render_template("upload.html")

# Removed route
@app.route("/removed", methods=["GET", "POST"])
def removed():
    if request.method == 'POST':
        # Handle file upload
        if 'image' not in request.files:
            return "No file part", 400
        
        file = request.files['image']
        if file.filename == '':
            return "No selected file", 400
        
        if file:
            # Save the file
            original_file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
            file.save(original_file_path)

            # Use remove.bg API to remove the background
            try:
                # Upload the image to remove.bg API and get the result
                result = remove_bg.remove_background_from_img_file(original_file_path)
                img = Image.open(BytesIO(result))
                
                # Save the processed image
                processed_file_path = os.path.join(app.config['PROCESSED_FOLDER'], file.filename)
                img.save(processed_file_path)

                return render_template("removed.html", filename=file.filename)
            except Exception as e:
                return f"An error occurred while processing the image: {e}", 500

    return render_template("removed.html", filename=None)

# Download and delete route
@app.route("/download/<filename>")
def download(filename):
    file_path = os.path.join(app.config['PROCESSED_FOLDER'], filename)
    
    if os.path.exists(file_path):
        # Serve the file for download
        response = send_from_directory(app.config['PROCESSED_FOLDER'], filename, as_attachment=True)
        
        # Schedule file deletion after a short delay
        threading.Thread(target=delayed_delete, args=(file_path,)).start()

        return response
    else:
        return "File not found", 404

# Help route
@app.route("/help")
def help():
    return render_template("help.html")

def delayed_delete(file_path):
    """Waits for a short time and then deletes the specified file."""
    time.sleep(2)  # Wait for 2 seconds before deleting the file
    try:
        os.remove(file_path)
        print(f"File {file_path} has been deleted.")
    except Exception as e:
        print(f"Error occurred while deleting the file: {e}")

if __name__ == '__main__':
    app.run(debug=True)
