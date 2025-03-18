import { proceedGame } from "../core/index.js";
import { validateUserValue } from "../utils/index.js";

/**
 * 게임 내 확인 버튼 핸들러
 * 유저가 입력한 값을 확인하고 유효성 체크 통과 시 게임을 진행한다.
 */
export const handleConfirmClick = (e) => {
  e.preventDefault();
  const input = document.getElementById("user-input");
  const { value } = input;

  if (validateUserValue(value)) {
    // 게임 진행
    proceedGame(value);
  } else {
    // 게임 미진행
    alert("잘못된 값을 입력하였습니다.");
    input.focus();
  }
};
