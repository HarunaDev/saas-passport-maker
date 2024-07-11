from flask import Flask, render_template, request

app = Flask(__name__)

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
def upload():
    return render_template("upload.html")

# Product route 
@app.route("/removed")
def removed():
    return render_template("removed.html")

# Help route
@app.route("/help")
def help():
    return render_template("help.html")

if __name__ == '__main__':
    app.run(debug=True)