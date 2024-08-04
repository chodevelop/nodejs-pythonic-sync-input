const { spawnSync } = require('child_process');

/**
 * 모듈명: pythonicInput(syncInput)
 * 
 * 작성자: 조영우 Youngwoo Cho, 최초 작성 일자: 4 August 2024
 * 
 * 설명: readline 과정을 파이썬과 유사한 동기 방식의 input(message)으로 사용할 수 있게 전환합니다.
 */
const input = function (message = "") {
    // 입력 메시지를 먼저 출력합니다.
    process.stdout.write(message);

    // 직접 삽입된 asyncInput 코드
    const asyncInputCode = `
    const { createInterface } = require("readline");

    const input = (() => {
        const consoleInterface = createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const readLineAsync = function () {
            return new Promise((resolve) => {
                consoleInterface.question("", (userInput) => {
                    resolve(userInput);
                });
            });
        }

        return async () => {
            const result = await readLineAsync();
            consoleInterface.close();
            return result;
        }
    })();

    (async () => {
        const result = await input();
        console.log(result); // JSON.stringify로 배열 형태로 반환
    })();
    `;

    // 스크립트를 일시적인 자식 프로세스로 실행
    const result = spawnSync('node', ['-e', asyncInputCode], {
        encoding: 'utf8',
        stdio: ['inherit', 'pipe', 'inherit']
    });

    // 오류가 발생하면 예외를 던집니다.
    if (result.error) {
        throw result.error;
    }

    // 결과를 반환하고 끝에 줄바꿈을 제거합니다.
    return result.stdout.trim();
}

module.exports = input;
module.exports.input = input;
