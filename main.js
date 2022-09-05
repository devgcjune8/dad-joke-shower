const dadJoke = document.querySelector("#id-of-dad-joke")
const dadJokeBtn = document.querySelector("#dont-push-dad-joke-btn-anymore-please-im-begging");

dadJokeBtn.addEventListener('click', getJoke)
dadJokeBtn.addEventListener('click', () => dadJokeBtn.innerHTML = 'Want some more?')


function getJoke() {
    const apiConfig = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', apiConfig).then(response => response.json()).then(jokeData => 
    dadJoke.innerHTML = jokeData.joke)
}

