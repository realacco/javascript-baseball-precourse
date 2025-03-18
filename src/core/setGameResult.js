import { globalVariable } from "../constant/globalVariable.js";
import { checkWinOrLose } from "./checkWinOrLose.js";
import { win } from "./win.js";

export const setGameResult = (strike, ball) => {
  globalVariable.strikeCount = strike;
  globalVariable.ballCount = ball;
  const isNothing = strike === 0 && ball === 0;

  if (checkWinOrLose(strike)) {
    win();
  }
  document.getElementById("result").innerHTML = isNothing
    ? "낫싱"
    : `${ball}볼 ${strike}스트라이크`;
};
