// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorMessageDiv = document.getElementById("error-message");

    // Clear any previous error messages
    errorMessageDiv.textContent = "";

    // Validate the form fields
    if (!name || !email) {
        errorMessageDiv.textContent = "Name and Email are required!";
        return;
    }

    // Validate email format using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessageDiv.textContent = "Please enter a valid email address.";
        return;
    }

    // Success Message
    errorMessageDiv.style.color = "green";
    errorMessageDiv.textContent = "Thank you for reaching out! We will get back to you shortly.";
});

// Dynamic To-Do List
const addTaskButton = document.getElementById("add-task");
const taskInput = document.getElementById("task-input");
const tasksList = document.getElementById("tasks");

addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
       
