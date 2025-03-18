import { globalVariable } from "../constant/globalVariable.js";
import { getBalls } from "./getBalls.js";
import { getStrikes } from "./getStrikes.js";
import { setGameResult } from "./setGameResult.js";

/**
 * 유저가 입력한 값 기반으로 게임을 진행한다.
 * @param {string} value
 */
export const proceedGame = (value) => {
  const userNumbers = value.split("").map((number) => parseInt(number, 10));
  const targetNumbers = globalVariable.targetNumber;
  const strikeCount = getStrikes(userNumbers, targetNumbers);
  const ballCount = getBalls(userNumbers, targetNumbers);

  setGameResult(strikeCount, ballCount);
};
