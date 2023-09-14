let jokesData;

// Function to fetch jokes data from JSON file
async function fetchJokesData() {
    const response = await fetch('jokes.json');
    jokesData = await response.json();
}

// Function to get a random joke based on id
function getJokeById(id) {
    return jokesData.find(joke => joke.id === id);
}

// Function to display a joke
function tellJoke() {
    // Joke content
    const jokeSetupDisplay = document.getElementById('joke-setup-display');
    const jokePunchlineDisplay = document.getElementById('joke-punchline-display');
    
    // Joke Source
    const jokeSourceTitle = document.getElementById('joke-source-title');
    const jokeSourceLink = document.getElementById('source-link');
    
    const randomId = Math.floor(Math.random() * jokesData.length) + 1;
    const randomJoke = getJokeById(randomId);

    if (randomJoke) {
        // Joke content
        jokeSetupDisplay.innerText = randomJoke['joke-setup'];
        jokePunchlineDisplay.innerText = randomJoke['joke-punchline'];

        // Joke Source
        jokeSourceTitle.innerText = "Fonte:";
        jokeSourceLink.innerText = randomJoke['link'];
        jokeSourceLink.href = randomJoke['link'];
        
    } else {
        jokeDisplay.innerText = 'Ops! Esqueci a piada, pergunta de novo...';
    }
}

// Fetch jokes data and call tellJoke() after fetching
fetchJokesData();
