/*
Fetch Fundamentals
In this example we're going to generate random pictures of dogs.
1. Select the random dog button and add a click event
    listener on it.
2. Create the function get random dog with the fetch api.
    - documentation for the dog api here https://dog.ceo/dog-api/
    - explore and display what the promise returns.
3. Create a function that will select the image 
4. Call the get random dog function in your event listener,
    and call it when the page loads.
*/

const getRandomDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            console.log(response);
            response.json().then((data)=>{
                console.log(data);
                let image = document.querySelector(".dog-image");
                image.src = data["message"];
            })
        })
        .catch((error) => {
            console.log("An error has occurred");
        })
}

document.querySelector("#new-dog-button").addEventListener("click", ()=>{
    getRandomDog();
});