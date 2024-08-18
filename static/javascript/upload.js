// Prevent the form from submitting when the "Upload Image" button is clicked
document.getElementById('upload-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    document.getElementById('file-input').click(); // Trigger the file input field
});

// Handle file selection and submit the form programmatically
document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        console.log('File selected:', file.name);
        // Now that a file is selected, submit the form
        document.querySelector('form').submit();
    } else {
        alert("No file selected");
    }
});
