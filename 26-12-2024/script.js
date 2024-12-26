// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {

  // Example of form validation for contact form
  const contactForm = document.querySelector("form");

  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      let isValid = true;
      
      // Get the form fields
      const nameField = document.getElementById("name");
      const emailField = document.getElementById("email");
      const messageField = document.getElementById("message");

      // Validate name
      if (nameField.value.trim() === "") {
        alert("Please enter your name.");
        isValid = false;
      }

      // Validate email
      if (emailField.value.trim() === "") {
        alert("Please enter your email.");
        isValid = false;
      } else if (!isValidEmail(emailField.value)) {
        alert("Please enter a valid email address.");
        isValid = false;
      }

      // Validate message
      if (messageField.value.trim() === "") {
        alert("Please enter a message.");
        isValid = false;
      }

      // Prevent form submission if validation fails
      if (!isValid) {
        event.preventDefault();
      }
    });
  }

  // Helper function to validate email
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  // Example of smooth scrolling for anchor links (if used)
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust for header size
          behavior: "smooth"
        });
      }
    });
  });

});
