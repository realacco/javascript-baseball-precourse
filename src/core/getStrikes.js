/**
 * strike 개수를 구한다.
 * @param {number[]} userNumbers
 * @param {number[]} targetNumbers
 * @returns {number}
 */
export const getStrikes = (userNumbers, targetNumbers) => {
  return userNumbers.reduce((acc, userNumber, index) => {
    const user = userNumber;
    const target = targetNumbers[index];

    if (user === target) return acc + 1;
    return acc;
  }, 0);
};
