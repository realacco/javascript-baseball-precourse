/**
 * strike 개수를 구한다.
 * @param {number[]} userNumbers
 * @param {number[]} targetNumbers
 * @returns {number}
 */
export const getStrikes = (userNumbers, targetNumbers) =>
  userNumbers.reduce((acc, userNumber, index) => {
    const user = Number(userNumber);
    const target = Number(targetNumbers[index]);

    if (user === target) return acc + 1;
    return acc;
  }, 0);
