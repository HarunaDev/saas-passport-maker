# Flask Passport Photo Converter

This is a Flask web application that allows users to upload a photo and convert it into a softcopy passport photograph. The application is also a Progressive Web Application (PWA), enabling users to download the web app and use it as a native application on their phone.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Progressive Web Application](#progressive-web-application)
- [Contributing](#contributing)
- [License](#license)

## Features

- Upload a photo and convert it into a passport photograph.
- Download the converted passport photograph.
- Progressive Web Application (PWA) support for a native app-like experience.

## Installation

### Prerequisites

- Python (version 3.6 or higher)
- pip (Python package installer)

### Installing Python

1. Download and install Python from the [official website](https://www.python.org/downloads/).
2. Verify the installation by opening a terminal (or command prompt) and running:

    ```sh
    python --version
    ```

    You should see the Python version printed out.

### Setting Up a Virtual Environment

1. Open a terminal (or command prompt) and navigate to the project directory.
2. Create a virtual environment:

    ```sh
    python -m venv venv
    ```

3. Activate the virtual environment:

    - On Windows:

        ```sh
        venv\Scripts\activate
        ```

    - On macOS and Linux:

        ```sh
        source venv/bin/activate
        ```

### Installing Flask

1. With the virtual environment activated, install Flask and other dependencies:

    ```sh
    pip install -r requirements.txt
    ```

    If you don't have a `requirements.txt` file, you can install Flask directly:

    ```sh
    pip install Flask
    ```

## Usage

1. Ensure the virtual environment is activated.
2. Run the Flask application:

    ```sh
    flask run
    ```

3. Open a web browser and go to `http://127.0.0.1:5000/`.

4. Upload a photo and convert it into a passport photograph.

## Progressive Web Application

This application is a Progressive Web Application (PWA). It can be installed on your phone to act like a native application.

### Installing on Android

1. Open the application in Chrome on your Android device.
2. Tap the menu button (three vertical dots) in the top-right corner.
3. Select "Add to Home screen."

### Installing on iOS

1. Open the application in Safari on your iOS device.
2. Tap the Share button (square with an arrow pointing up).
3. Select "Add to Home Screen."

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
