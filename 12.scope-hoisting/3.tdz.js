// Temporal Dead Zone = (스코프에 존재하지만) 초기화 전 접근 불가 구간

// let/const는 호이스팅되지만, 초기화 전에는 접근할 수 없음
// var는 호이스팅 + undefined로 초기화됨

{
  // 호이스팅으로 a는 이미 스코프에 존재함
  // 하지만 아직 초기화되지 않음
  //   console.log(a); // 그래서 접근하면 ReferenceError (이 구간이 TDZ)
  let a = 1; // 초기화됨 → 이제 접근 가능 (TDZ 끝)
  console.log(a); // 1
}
