const counter = document.querySelector(".counter-number");
const API_URL = "https://oyekn9nrrb.execute-api.us-east-1.amazonaws.com/prod/visitors";

// Increment visitor count (POST)
async function incrementVisitor() {
    const response = await fetch(API_URL, { method: "POST" });
    const data = await response.json();
    counter.innerHTML = data.views; // Access the "views" property
}

// Get current visitor count without incrementing (GET)
async function getVisitorCount() {
    const response = await fetch(API_URL, { method: "GET" });
    const data = await response.json();
    counter.innerHTML = data.views; // Access the "views" property
}

// Example: increment on page load
window.addEventListener("load", incrementVisitor);
