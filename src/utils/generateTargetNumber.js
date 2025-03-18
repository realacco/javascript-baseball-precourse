import {
  MAX_TARGET_NUMBER,
  MIN_TARGET_NUMBER,
  TARGET_NUMBER_COUNT,
} from "../constant/game-settings.js";

/**
 * 1 ~ 9의 랜덤한 숫자로 이루어진 3개의 서로 다른 숫자 배열을 반환한다.
 * @returns {number[]}
 */
export const generateTargetNumber = () => {
  const numbers = new Set();

  // 중복 방지
  while (numbers.size < TARGET_NUMBER_COUNT) {
    numbers.add(MissionUtils.Random.pickNumberInRange(MIN_TARGET_NUMBER, MAX_TARGET_NUMBER));
  }

  return Array.from(numbers);
};
