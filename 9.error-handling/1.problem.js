// 문제: 에러 발생 → 실행 흐름 중단

console.log('A');

throw new Error('error'); // 에러가 발생함

console.log('B'); // 실행되지 않음
