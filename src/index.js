import { proceedGame, initGame } from "./core/index.js";
import { generateTargetNumber } from "./utils/generateTargetNumber.js";

export class BaseballGame {
    constructor() {
        const targetNumbers = generateTargetNumber();
        initGame(targetNumbers);
    }

    play(userNumbers, targetNumbers) {
        const userNumberArr = userNumbers.split("").map((number) => parseInt(number, 10));
        const targetNumberArr = targetNumbers.split("").map((number) => parseInt(number, 10));
        initGame(targetNumberArr);
        return proceedGame(userNumberArr, targetNumberArr);
    };
}

new BaseballGame();