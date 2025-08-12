const playerBoard = document.getElementById("player-board");
const enemyBoard = document.getElementById("enemy-board");

function createBoard(board) {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.dataset.index = i;
    board.appendChild(cell);
  }
}

createBoard(playerBoard);
createBoard(enemyBoard);

enemyBoard.addEventListener("click", async (e) => {
  if (e.target.tagName !== "DIV") return;
  const index = e.target.dataset.index;
  const res = await fetch(`/attack/${index}`);
  const result = await res.json();
  e.target.classList.add(result.hit ? "hit" : "miss");
});
