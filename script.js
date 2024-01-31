const quoteToCopy = document.getElementById("quoteToCopy");
const quoteInput = document.getElementById("quoteInput");
const timer = document.getElementById("timer");

quoteInput.addEventListener("input", (e) => {
  const arrayQuoteToCopy = quoteToCopy.querySelectorAll("span");
  const userInputQuote = e.target.value.split("");

  let correct = true;

  arrayQuoteToCopy.forEach((characterSpan, i) => {
    const character = userInputQuote[i];
    if (character == null) {
      characterSpan.classList.remove("incorrect");
      characterSpan.classList.remove("correct");
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
      correct = false;
    }
  });
  if (correct) getNextQuote();
});

const randomQuoteApiUrl = "http://api.quotable.io/random";

const getRandomQuote = () => {
  return fetch(randomQuoteApiUrl)
    .then((response) => response.json())
    .then((data) => data);
};

const getNextQuote = async () => {
  startTimer();
  const quote = await getRandomQuote();
  quoteToCopy.innerHTML = "";
  quote.content.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    quoteToCopy.appendChild(characterSpan);
  });
};

let startTime;

const startTimer = () => {
  timer.innerText = 0;
  startTime = new Date();
  setInterval(() => {
    timer.innerText = getTimerTime();
  }, 1000);
};

const getTimerTime = () => {
  return Math.floor((new Date() - startTime) / 1000);
};

getNextQuote();
