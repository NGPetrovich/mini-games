const games = ["Memory Game", "Hit the Mole", "Color Picker"];

const game = games[Math.floor(Math.random() * Math.floor(games.length))];

document.querySelector(".random-game").append(game);
