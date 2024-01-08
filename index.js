// Get a reference to the button element
const button = document.querySelector('#toggle-text');

// Add an event listener to the button
button.addEventListener('click', function() {
  // Get a reference to the text element
  const text = document.querySelector('#hidden-text');

  // Toggle the visibility of the text element
  if (text.style.display === 'none') {
    text.style.display = 'block';
    button.textContent = 'Hide Text';
  } else {
    text.style.display = 'none';
    button.textContent = 'Show Text';
  }
});

// Get a reference to the form element
const form = document.querySelector('#contact-form');

// Add an event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get a reference to the name and email input fields
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');

  // Get the values of the input fields
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  // Check if the name and email fields are not empty
  if (nameValue !== '' && emailValue !== '') {
    // Send the form data to the server using an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit-form');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ name: nameValue, email: emailValue }));

    // Clear the input fields
    nameInput.value = '';
    emailInput.value = '';

    // Show a success message
    const message = document.querySelector('#success-message');
    message.style.display = 'block';

    // Hide the message after 5 seconds
    setTimeout(function() {
      message.style.display = 'none';
    }, 5000);
  }
});
