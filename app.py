from flask import Flask, render_template, request, redirect, url_for, send_from_directory
import os
import threading
import time

app = Flask(__name__)

# Set a folder to save uploaded images
UPLOAD_FOLDER = 'static/uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

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
            # Save the file and redirect to display
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
            file.save(file_path)
            return render_template("removed.html", filename=file.filename)

    return render_template("removed.html", filename=None)

# Download and delete route
@app.route("/download/<filename>")
def download(filename):
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    
    if os.path.exists(file_path):
        # Serve the file for download
        response = send_from_directory(app.config['UPLOAD_FOLDER'], filename, as_attachment=True)
        
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
