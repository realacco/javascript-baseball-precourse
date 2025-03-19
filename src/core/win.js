import { handleRestartGame } from "../handlers/index.js";
import { globalVariable } from "../constant/globalVariable.js";

export const win = () => {
    globalVariable.isGameRunning = false;
    const gameRestartButtonElement = document.getElementById("game-restart-button");
    const confirmButtonElement = document.getElementById("submit");

    gameRestartButtonElement.style.display = "inline";
    // 기존 이벤트 리스너 제거 후 새로 등록
    gameRestartButtonElement.removeEventListener("click", handleRestartGame);
    gameRestartButtonElement.addEventListener("click", handleRestartGame);

    confirmButtonElement.setAttribute('disabled', true);
};