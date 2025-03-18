import { handleRestartGame } from "../handlers/index.js";
import { globalVariable } from "../constant/globalVariable.js";

export const win = () => {
    globalVariable.isGameRunning = false;
    const gameRestartButtonElement = document.getElementById("game-restart-button");
    const confirmButtonElement = document.getElementById("submit");

    gameRestartButtonElement.style.display = "inline";
    gameRestartButtonElement.addEventListener("click", handleRestartGame);

    confirmButtonElement.setAttribute('disabled', true);
}