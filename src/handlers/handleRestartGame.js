import { play } from "../core/index.js";

export const handleRestartGame = () => {
  const confirmButtonElement = document.getElementById('submit');
  confirmButtonElement.removeAttribute('disabled');
  play();
};
