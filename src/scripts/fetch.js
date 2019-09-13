import buildHTML from "./htmlForm.js"

let container = document.querySelector(".container")
function getJoke(){
    fetch(`https://icanhazdadjoke.com/`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
    .then(joke => joke.json())
    .then(parsedJoke =>{
        let newJoke = buildHTML(parsedJoke.joke)
        container.innerHTML += newJoke
    })
}

export default getJoke