// this is our javascript file.

console.log("Javascript file is linked");

const getUserName = () => {
    let userName = prompt("What is your name?");
    return userName;
}

const getDescription = () => {
    let description = prompt("What is your description?");
    return description;
}

const updateElement = (selector, value) => {
    let elem = document.querySelector(selector);
    elem.innerHTML = value;
}

const updateUserName = () => {
    let userName = getUserName();
    updateElement("#username", userName);
}

const updateDescription = () => {
    let description = getDescription();
    updateElement(".description", description);
}