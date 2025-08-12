const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const newQuoteBtn = document.querySelector(".new-quote-btn");

const fetchQuote = async  () => {
  try {
    quoteText.textContent = "Loading....";
    quoteAuthor.textContent = " ";
const response = await fetch('https://dummyjson.com/quotes/random');
const data = await response.json();

quoteAuthor.textContent = `${data.quote}`;
quoteText.textContent =   `${data.author}`
  }
  catch(error) {
    console.log("Fetch error:", error);
    quoteAuthor.textContent = " ";
    quoteText.textContent = " ";

  }
  
}

newQuoteBtn.addEventListener("click",fetchQuote);
fetchQuote();
