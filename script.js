// Get the canvas element and its context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set initial drawing state
let painting = false;
let currentColor = "#000000";
let brushSize = 5;

// Function to start drawing
function startPosition(e) {
    painting = true;
    draw(e);
}

// Function to stop drawing
function endPosition() {
    painting = false;
    ctx.beginPath(); // Start a new path to prevent the lines from connecting
}

// Function to draw on canvas
function draw(e) {
    if (!painting) return;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = currentColor;

    // Draw the line
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// Event listeners to handle mouse movements and clicks
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);

// Event listener for the color picker
document.getElementById("colorPicker").addEventListener("input", (e) => {
    currentColor = e.target.value;
});

// Event listener for the brush size slider
document.getElementById("brushSize").addEventListener("input", (e) => {
    brushSize = e.target.value;
});

// Event listener for the clear canvas button
document.getElementById("clearBtn").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
});