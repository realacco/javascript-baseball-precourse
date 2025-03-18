/**
 * ball 개수를 구한다.
 * @param {number[]} userNumbers
 * @param {number[]} targetNumbers
 * @returns {number}
 */
export const getBalls = (userNumbers, targetNumbers) =>
  userNumbers.reduce(
    (acc, userNumber, index) =>
      userNumber !== targetNumbers[index] && targetNumbers.includes(userNumber)
        ? acc + 1
        : acc,
    0
  );
