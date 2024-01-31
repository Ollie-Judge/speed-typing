const quoteToCopy = document.getElementById("quoteToCopy");
const quoteInput = document.getElementById("quoteInput");

quoteInput.addEventListener("input", (e) => {
  const arrayQuoteToCopy = quoteToCopy.querySelectorAll("span");
  const userInputQuote = e.target.value.split("");
  console.log("quote: ", arrayQuoteToCopy);
  console.log("user: ", userInputQuote);
  arrayQuoteToCopy.forEach((characterSpan, i) => {
    const character = userInputQuote[i];
    if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
    }
  });
});

const randomQuoteApiUrl = "http://api.quotable.io/random";

const getRandomQuote = () => {
  return fetch(randomQuoteApiUrl)
    .then((response) => response.json())
    .then((data) => data);
};

const getNextQuote = async () => {
  const quote = await getRandomQuote();
  quoteToCopy.innerHTML = "";
  quote.content.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    quoteToCopy.appendChild(characterSpan);
  });
};

getNextQuote();
