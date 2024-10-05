let modal = document.getElementById("game-modal");
let gameTitle = document.getElementById("game-title");
let gameImage = document.getElementById("game-image");
let gameDescription = document.getElementById("game-description");
let gamePrice = document.getElementById("game-price");

let gameDemoButton = document.createElement("button");
gameDemoButton.id = "game-demo-btn";
gameDemoButton.textContent = "Try Demo";
gameDemoButton.style.display = "none";
document.querySelector(".modal-content").appendChild(gameDemoButton);

function showDetails(gameId) {
  const games = {
    free_game1: {
      title: "The First Descendant",
      image: "./imágenes/free2play1.jpg",
      description: "Co-op action RPG.",
      price: "Free",
    },
    free_game2: {
      title: "The Sims 4",
      image: "./imágenes/free2play2.jpg",
      description: "Create and live in your world.",
      price: "Free",
    },
    free_game3: {
      title: "Dota2",
      image: "./imágenes/free2play3.jpg",
      description: "Multiplayer battle arena.",
      price: "Free",
    },
    action_game1: {
      title: "PUBG Battlegrounds",
      image: "./imágenes/acción1.jpg",
      description: "Intense Battle Royale.",
      price: "$20.50",
    },
    action_game2: {
      title: "Call Of Duty: Black Ops 6",
      image: "./imágenes/acción2.jpg",
      description: "Epic FPS action.",
      price: "$59.90",
    },
    action_game3: {
      title: "Rust",
      image: "./imágenes/acción3.jpg",
      description: "Survive and build.",
      price: "$25.50",
    },
    sport_game1: {
      title: "FC 25",
      image: "./imágenes/sport1.jpg",
      description: "Realistic soccer simulation.",
      price: "$55.90",
    },
    sport_game2: {
      title: "Football Manager 25",
      image: "./imágenes/sport2.jpg",
      description: "Manage your football team.",
      price: "$22.95",
    },
    sport_game3: {
      title: "F1 24",
      image: "./imágenes/sport3.jpg",
      description: "Become an F1 champion.",
      price: "$33.86",
    },
    adventure_game1: {
      title: "Temtem",
      image: "./imágenes/aventura1.jpg",
      description: "Creature catching adventure.",
      price: "$15.99",
    },
    adventure_game2: {
      title: "Dead Cells",
      image: "./imágenes/aventura2.jpg",
      description: "Rogue-lite action platformer.",
      price: "$10.95",
    },
    adventure_game3: {
      title: "South Park: Snow Days!",
      image: "./imágenes/aventura3.jpg",
      description: "Fun action-adventure.",
      price: "$21.90",
    },
  };

  const game = games[gameId];
  if (game) {
    gameTitle.textContent = game.title;
    gameImage.src = game.image;
    gameDescription.textContent = game.description;
    gamePrice.textContent = `Price: ${game.price}`;

    if (gameId === "adventure_game1" || gameId === "adventure_game2") {
      gameDemoButton.style.display = "inline-block";
      gameDemoButton.onclick = () => {
        window.location.href = `./${gameId}_demo.html`;
      };
    } else {
      gameDemoButton.style.display = "none";
    }

    modal.style.display = "block";
  }
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};
