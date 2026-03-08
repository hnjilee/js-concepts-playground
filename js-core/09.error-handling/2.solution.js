// 해결: try/catch로 제어

try {
  throw new Error('Something went wrong'); // 에러 발생 가능 코드
} catch (error) {
  console.log(`caught: ${error.message}`); // 에러 처리
}

console.log('Program continues'); // Program continues
