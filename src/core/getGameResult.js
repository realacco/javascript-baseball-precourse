import { globalVariable } from "../constant/globalVariable.js";

export const getGameResult = (strike, ball) => {
  globalVariable.strikeCount = strike;
  globalVariable.ballCount = ball;
  const isNothing = strike === 0 && ball === 0;

  return isNothing
    ? "낫싱"
    : `${ball}볼 ${strike}스트라이크`;
};
