const quoteToCopy = document.getElementById("quoteToCopy");
const quoteInput = document.getElementById("quoteInput");

quoteInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  //characterSpan.classList.add("incorrect");
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
