/**
 * strike 개수를 구한다.
 * @param {number[]} userNumbers
 * @param {number[]} targetNumbers
 * @returns {number}
 */
export const getStrikes = (userNumbers, targetNumbers) => {
  // 입력값 검증
  if (!Array.isArray(userNumbers) || !Array.isArray(targetNumbers)) {
    throw new Error('입력값이 배열이 아닙니다.');
  }

  // 숫자로 변환하여 비교
  return userNumbers.reduce((acc, userNumber, index) => {
    const user = Number(userNumber);
    const target = Number(targetNumbers[index]);
    
    if (user === target) return acc + 1;
    return acc;
  }, 0);
};
