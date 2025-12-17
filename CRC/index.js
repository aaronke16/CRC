const counter = document.querySelector("#view-count");
const API_URL = "https://oyekn9nrrb.execute-api.us-east-1.amazonaws.com/prod/visitors";

async function incrementVisitor() {
    const response = await fetch(API_URL, { method: "POST" });
    const data = await response.json();
    console.log(data.views);
    counter.innerHTML = data.views;
}

async function getVisitorCount() {
    const response = await fetch(API_URL, { method: "GET" });
    const data = await response.json();
    console.log(data.views);
    counter.innerHTML = data.views;
}

window.addEventListener("load", incrementVisitor);