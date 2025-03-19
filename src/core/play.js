import { generateTargetNumber } from "../utils/index.js";
import { globalVariable } from "../constant/globalVariable.js";
import { handleConfirmClick } from "../handlers/index.js";
import { handleRestartGame } from "../handlers/index.js";

export const play = () => {
  globalVariable.targetNumber = generateTargetNumber(); // generate target number
  if (!globalVariable.isGameRunning) {
    const confirmButtonElement = document.getElementById("submit");
    const reStartButtonElement = document.getElementById("game-restart-button");

    confirmButtonElement.removeEventListener("click", handleConfirmClick);
    reStartButtonElement.removeEventListener("click", handleRestartGame);
    
    confirmButtonElement.addEventListener("click", handleConfirmClick);
    reStartButtonElement.style.display = "none";
    globalVariable.isGameRunning = true;
  }
};
