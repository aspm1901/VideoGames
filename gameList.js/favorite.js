function toggleFavorite(event, element) {
  event.stopPropagation();
  element.innerHTML = element.innerHTML === "★" ? "☆" : "★";
}
