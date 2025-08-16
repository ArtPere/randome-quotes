function toggleFavoriteIcon(isFavorite, el) {
  el.toggle("fa", isFavorite);
  el.toggle("far", !isFavorite);
}
function showFavoriteCard(text, author, container) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `
        <p class="favorite-quote">${text}</p>
        <p class="favorite-author">${author}</p>
      `;
  container.appendChild(favoriteCard);
}

function removeFavoriteCard(quotes) {
  const favoriteCards = document.querySelectorAll(".favorite-card");
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quotes)) {
      card.remove();
    }
  });
}

export { toggleFavoriteIcon, showFavoriteCard, removeFavoriteCard };
