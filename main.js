//game starts at default state
//players need to take turns selecting an unused grid-cell
// player one uses 'x' and player two uses 'o' to select the grid cells
//player x selects a cell
//after the click on the selected cell, an 'x' is added to that cell
//player o starts there turn
//player o selects a cell that is empty
//the players take turns selecting cell until either 1 player connects three cells with there respective icon, or all the grid cells are used and there is a tie

let currentPlayer = "X";

const playerXSelections = [];
const playerOSelections = [];
const winningCombinations = [
  // Horizontal Win Combos:
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  //vertical win combos:
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  //diagonal win combos:
  [3, 5, 7],
  [1, 5, 9],
];
const cellElements = document.querySelectorAll(".grid-cell");

for (let index = 0; index < cellElements.length; index += 1) {
  let cellElement = cellElements[index];
  cellElement.addEventListener("click", function () {
    console.log("Player has clicked a cell" + cellElement.id);
    if (cellElement.innerHTML === "") {
      cellElement.innerHTML = currentPlayer;
    }
    //else {
    //   alert("That Cell has already been selected, choose another");
    // }

    if (currentPlayer === "X") {
      playerXSelections.push(Number(cellElement.id));
      currentPlayer = "O";
    } else {
      playerOSelections.push(Number(cellElement.id));
      currentPlayer = "X";
    }
    if (checkForWin(playerXSelections, winningCombinations)) {
      alert("Player X Wins!!");
    } else {
      if (checkForWin(playerOSelections, winningCombinations)) {
        alert("Player O Wins!!");
      }
    }
    if (index === 9) {
      alert("Tie!");
    }
  });
}

function checkForWin(playerSelections, winningCombination) {
  for (
    let outerIndex = 0;
    outerIndex < winningCombination.length;
    outerIndex += 1
  ) {
    let matches = 0;
    const winningMatchList = winningCombinations[outerIndex];
    for (
      let innerIndex = 0;
      innerIndex < winningMatchList.length;
      innerIndex += 1
    ) {
      if (playerSelections.includes(winningMatchList[innerIndex])) {
        matches += 1;
      }
      if (matches === 3) {
        return true;
      }
    }
  }
  return false;
}
