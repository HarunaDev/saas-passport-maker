from flask import Flask, render_template, request, redirect, url_for
import os

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
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
            return render_template("removed.html", filename=file.filename)

    return render_template("removed.html", filename=None)

# Help route
@app.route("/help")
def help():
    return render_template("help.html")

if __name__ == '__main__':
    app.run(debug=True)
