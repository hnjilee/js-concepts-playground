// return은 값 반환 + 함수 종료

// 값 반환 X → 외부에서 사용 불가
function add(a, b) {
  console.log(a + b); // 결과 사용 불가
}

add(1, 2); // 3 (출력만 하고 끝)

// 값 반환 O → 외부에서 사용 가능
function sum(a, b) {
  return a + b; // 결과 사용 가능
}

const result = sum(1, 2); // 재사용 가능
