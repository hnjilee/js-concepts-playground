// return은 값 반환 + 함수 종료

function print(num) {
  if (num < 0) {
    return; // 조기 종료
  }
  console.log(num);
}

print(-1); // 출력 없음
