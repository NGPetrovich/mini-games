document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "image1",
      img: "../images/image1.png",
    },
    {
      name: "image2",
      img: "../images/image2.png",
    },
    {
      name: "image3",
      img: "../images/image3.png",
    },
    {
      name: "image4",
      img: "../images/image4.png",
    },
    {
      name: "image5",
      img: "../images/image5.png",
    },
    {
      name: "image6",
      img: "../images/image6.png",
    },
    {
      name: "image1",
      img: "../images/image1.png",
    },
    {
      name: "image2",
      img: "../images/image2.png",
    },
    {
      name: "image3",
      img: "../images/image3.png",
    },
    {
      name: "image4",
      img: "../images/image4.png",
    },
    {
      name: "image5",
      img: "../images/image5.png",
    },
    {
      name: "image6",
      img: "../images/image6.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const gridDisplay = document.querySelector("#grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenIDs = [];
  const cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "../images/secret.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      gridDisplay.appendChild(card);
    }
  }

  function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIDs[0];
    const optionTwoId = cardsChosenIDs[1];
    console.log("check for match");

    if (optionOneId === optionTwoId) {
      cards[optionOneId].setAttribute("src", "../images/secret.png");
      cards[optionTwoId].setAttribute("src", "../images/secret.png");
      alert("you have clicked the same image");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match!");
      cards[optionOneId].setAttribute("src", "../images/victory.png");
      cards[optionTwoId].setAttribute("src", "../images/victory.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "../images/secret.png");
      cards[optionTwoId].setAttribute("src", "../images/secret.png");
      alert("sorry, try again!");
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIDs = [];

    if (cardsWon.length == cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  function flipCard() {
    const cardID = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardID].name);
    console.log("clicked", cardArray[cardID]);
    cardsChosenIDs.push(cardID);
    console.log(cardsChosen);
    this.setAttribute("src", cardArray[cardID].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }

  createBoard();
});
