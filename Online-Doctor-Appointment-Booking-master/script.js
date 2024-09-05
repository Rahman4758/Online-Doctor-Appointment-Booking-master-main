// Get the modal and button elements
const formModal = document.getElementById('form-modal');
const openFormBtns = document.querySelectorAll('.open-form-btn');
const closeBtn = document.querySelector('.close-btn');

// Loop through all buttons to add event listeners for opening the modal
openFormBtns.forEach(button => {
    button.addEventListener('click', () => {
        formModal.style.display = 'flex'; // Show the modal when any button is clicked
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    formModal.style.display = 'none'; // Hide the modal
});

// Close the modal if the user clicks outside the form content
window.addEventListener('click', (event) => {
    if (event.target === formModal) {
        formModal.style.display = 'none'; // Hide the modal when clicking outside the form
    }
});
