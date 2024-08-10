if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./static/javascript/sw.js").then(registration => {
            console.log("SW Registered!")
            console.log(registration);
        }).catch(error => {
            console.log("Sw Registration Failed")
            console.log(error)
        })
    })
  }

// Upload button 
document.getElementById('upload-button').addEventListener('click', function() {
    // Trigger the hidden file input field
    document.getElementById('file-input').click();
});

// Optional: Handle the file selection
document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        console.log('File selected:', file.name);
        // You can proceed to upload the file or display a preview, etc.
    }
});
