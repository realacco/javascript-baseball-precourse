import { generateTargetNumber } from "../utils/index.js";
import { globalVariable } from "../constant/globalVariable.js";
import { handleConfirmClick } from "../handlers/index.js";

export const play = () => {
  globalVariable.targetNumber = generateTargetNumber(); // generate target number
  if (!globalVariable.isGameRunning) {
    let confirmButtonElement = document.getElementById("submit");
    confirmButtonElement.onclick = handleConfirmClick;

    let reStartButtonElement = document.getElementById("game-restart-button");
    reStartButtonElement.style.display = "none";
  }
};
