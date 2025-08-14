import quotes from "./quotes.js";

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
  console.log(currentQuoteIndex);
  togglFavoriteBtn.textContent = quotes[currentQuoteIndex].isFavorite
    ? "Remove from favorites"
    : "Add to favorites";

  quoteElement.textContent = text;
  authorElement.textContent = author;
}
function toggLeFavorite() {
  quotes[currentQuoteIndex].isFavorite = !quotes[currentQuoteIndex].isFavorite;
  togglFavoriteBtn.textContent = quotes[currentQuoteIndex].isFavorite
    ? "Remove from favorites"
    : "Add to favorites";

  if (quotes[currentQuoteIndex].isFavorite) {
    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("favorite-card");
    favoriteCard.innerHTML = `
        <p class="favorite-quote">${quotes[currentQuoteIndex].text}</p>
        <p class="favorite-author">${quotes[currentQuoteIndex].author}</p>
      `;
    favoritesContainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll(".favorite-card");
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(quotes[currentQuoteIndex].text)) {
        card.remove();
      }
    });
  }
}
generateBtn.addEventListener("click", generateRandomQuote);
togglFavoriteBtn.addEventListener("click", toggLeFavorite);
