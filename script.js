document.addEventListener('DOMContentLoaded', function() {
    // Apply the saved theme on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
    }

    document.getElementById('themeToggleBtn').addEventListener('click', function() {
        // Cycle through 'regular', 'light', and 'dark' themes
        let currentTheme = document.body.className;
        let newTheme;
        if (currentTheme === 'light-theme') {
            newTheme = 'dark-theme';
        } else if (currentTheme === 'dark-theme') {
            newTheme = ''; // Regular theme doesn't have a specific class
        } else {
            newTheme = 'light-theme';
        }

        // Update the body's class with the new theme
        document.body.className = newTheme;

        // Save the current theme preference to localStorage
        if (newTheme) {
            localStorage.setItem('theme', newTheme);
        } else {
            localStorage.removeItem('theme');
        }
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    
    // Your existing validation logic here
    
    // If all validations pass
    alert('Thank you!'); // Show an alert box to the user
    
    // Here you can also add code to actually submit the form data using AJAX or fetch if needed
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    
    // Your existing validation logic here
    
    // If all validations pass, show the thank you message
    document.getElementById('thankYouMessage').style.display = 'block';
    
    // Optionally, hide the message after a few seconds
    setTimeout(function() {
        document.getElementById('thankYouMessage').style.display = 'none';
    }, 5000); // Adjust time as needed
    
    // Here you can also add code to actually submit the form data using AJAX or fetch if needed
});
