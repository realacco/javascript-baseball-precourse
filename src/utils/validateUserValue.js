import {
  TARGET_NUMBER_COUNT,
  MIN_TARGET_NUMBER,
  MAX_TARGET_NUMBER,
} from "../constant/game-settings.js";

/**
 * 유저가 입력한 값이 게임의 범위를 찾아서 통과하는지 확인한다.
 * @param {string} value
 * @returns {boolean}
 */
export const validateUserValue = (value) => {
  if (!value) return false;

  const userNumbers = value.split("").map((number) => parseInt(number, 10));
  const userNumberSet = new Set(userNumbers);

  if (!Number.isInteger(Number(value))) return false; // 정수가 입력되지 않은 경우
  if (userNumbers.length !== TARGET_NUMBER_COUNT) return false; // 숫자의 개수가 일치하지 않는 경우
  if (userNumberSet.size !== TARGET_NUMBER_COUNT) return false; // 중복된 숫자가 입력된 경우
  if (userNumbers.some((number) => MIN_TARGET_NUMBER > number || number > MAX_TARGET_NUMBER))
    return false; // 숫자의 범위가 맞지 않는 경우
  return true;
};
