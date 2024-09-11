// main.js file


// Change the text of the first p element to “Correct the typos in this text”.
let firstPElement = document.querySelector("#update-text>p");
firstPElement.innerText = "Correct the typos in this text";

// Make the text of the second paragraph of the bold by embedding the
// existing text in the <strong</strong> tags
let secondPElement = document.querySelector("#update-html>p");
//secondPElement.innerHTML = "<strong>" + secondPElement.innerHTML + "</strong>"
let secondPElementText = secondPElement.innerHTML;
secondPElement.innerHTML = `<strong>${secondPElementText}</strong>`;

// Using the style.color property, change the color of the p element under "update-color" to blue.
let thirdPElement = document.querySelector("#update-colour>p");
thirdPElement.style.color = "Blue";
