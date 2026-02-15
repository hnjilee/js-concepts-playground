// 반복 흐름 제어

// break: 조기 종료
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    console.log('three');
    break;
  }
  console.log(i); // 0, 1, 2, three
}

// continue: 건너뛰기
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    console.log('three');
    continue;
  }
  console.log(i); // 0, 1, 2, three, 4
}
