import { TARGET_NUMBER_COUNT } from "../constant/game-settings.js";

/**
 * 게임의 승패를 판단한다.
 * @param {number} strikeCount strike 개수
 * @returns 
 */
export const checkWinOrLose = (strikeCount) =>
  strikeCount === TARGET_NUMBER_COUNT;
