const quoteToCopy = document.getElementById("quoteToCopy");

const randomQuoteApiUrl = "http://api.quotable.io/random";

const getRandomQuote = () => {
  return fetch(randomQuoteApiUrl)
    .then((response) => response.json())
    .then((data) => data);
};

const getNextQuote = async () => {
  const quote = await getRandomQuote();
  quoteToCopy.innerHTML = quote.content;
  console.log(quote);
};

getNextQuote();
