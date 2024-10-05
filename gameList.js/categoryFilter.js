function filterGames(category) {
  const games = document.querySelectorAll(".game-card");
  games.forEach((game) => {
    if (category === "all" || game.getAttribute("data-category") === category) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  });
}
