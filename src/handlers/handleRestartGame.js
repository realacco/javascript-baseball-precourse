import { initGame } from "../core/index.js";
import { generateTargetNumber } from "../utils/generateTargetNumber.js";

export const handleRestartGame = () => {
  const confirmButtonElement = document.getElementById('submit');
  confirmButtonElement.removeAttribute('disabled');

  const targetNumbers = generateTargetNumber();
  initGame(targetNumbers);
};
