import quotes from "./src/quotes.js";
import {
  toggleFavoriteIcon,
  showFavoriteCard,
  removeFavoriteCard,
} from "./src/favoritesHandlers.js";
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const togglFavoriteBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");
let currentQuoteIndex = null;
console.log(currentQuoteIndex);
function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const currentQuotes = quotes[currentQuoteIndex];
  const { text, author } = currentQuotes;
  quoteElement.textContent = text;
  authorElement.textContent = author;
  console.log(currentQuoteIndex);
  toggleFavoriteIcon(
    quotes[currentQuoteIndex].isFavorite,
    togglFavoriteBtn.classList
  );
}

function toggLeFavorite() {
  quotes[currentQuoteIndex].isFavorite = !quotes[currentQuoteIndex].isFavorite;
  togglFavoriteBtn.classList.toggle("fa", quotes[currentQuoteIndex].isFavorite);
  togglFavoriteBtn.classList.toggle(
    "far",
    !quotes[currentQuoteIndex].isFavorite
  );

  if (quotes[currentQuoteIndex].isFavorite) {
    showFavoriteCard(
      quotes[currentQuoteIndex].text,
      quotes[currentQuoteIndex].author,
      favoritesContainer
    );
  } else {
    removeFavoriteCard(quotes[currentQuoteIndex].text);
  }
}
generateBtn.addEventListener("click", generateRandomQuote);
togglFavoriteBtn.addEventListener("click", toggLeFavorite);
