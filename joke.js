function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(res => res.json())
      .then(data => {
        document.getElementById("joke-text").textContent =
          `${data.setup} — ${data.punchline}`;
      })
      .catch(() => {
        document.getElementById("joke-text").textContent =
          "Oops! Couldn't load a joke.";
      });
  }
  