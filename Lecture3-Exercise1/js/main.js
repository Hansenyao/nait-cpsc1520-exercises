// this is our javascript file.

// we're going to add an event listener to a button.
let button = document.querySelector("#add-favourite");
button.addEventListener("click", () => {
    let message = getFavouriteThing();
    upDateFavouritesList(message);
});

// We're going to prompt the user for their favourite things
const getFavouriteThing = () => {
    return prompt("What is a favouvrite thing of yours?");
}


// The html we're going to use is as follows:
// <li class="list-group-item">THE FAVOURITE THING</li>
const upDateFavouritesList = (favthing) => {
    let elem = document.querySelector(".favourite-things");
    let newElem = document.createElement("li");
    newElem.classList.add("list-group-item");
    newElem.innerText = favthing;
    elem.appendChild(newElem);
}

// We're going get the current html of the items as a string append our newly created
// items
let elem = document.querySelector(".favourite-things");
elem.addEventListener("mouseover", (event) => {
    event.target.classList.add("hover")
})

elem.addEventListener("mouseout", (event) => {
    event.target.classList.remove("hover")
})
