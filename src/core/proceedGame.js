import { getBalls } from "./getBalls.js";
import { getStrikes } from "./getStrikes.js";
import { getGameResult } from "./getGameResult.js";
import { checkWinOrLose } from "./checkWinOrLose.js";
import { win } from "./win.js";

/**
 * 유저가 입력한 값 기반으로 게임을 진행한다.
 * @param {string} value
 * @return {string} game result
 */
export const proceedGame = (userNumbers, targetNumbers) => {
  const strikeCount = getStrikes(userNumbers, targetNumbers);
  const ballCount = getBalls(userNumbers, targetNumbers);

  const result = getGameResult(strikeCount, ballCount);
  if (checkWinOrLose(strikeCount)) {
    win();
  }
  const resultElement = document.getElementById("result");
  resultElement.textContent = result;

  return result;
};
