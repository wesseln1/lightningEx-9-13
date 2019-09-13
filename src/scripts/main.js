import getJoke from "./fetch.js"
let container = document.querySelector(".container")

container.addEventListener("click", (event)=> {
    if(event.target.classList != "newJokeButton"){
        console.log("no no no")
    } else {
        getJoke()
    }
})
