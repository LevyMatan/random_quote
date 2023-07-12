const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

async function getQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  return data.content;
}

async function setQuote() {
  const quote = await getQuote();
  quoteElement.textContent = quote;
}

newQuoteButton.addEventListener('click', setQuote);

setQuote();