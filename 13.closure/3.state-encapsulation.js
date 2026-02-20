// 클로저 활용 예시 2 - 함수 기반 상태 관리

function createState(initial) {
  let value = initial;

  return {
    get: () => value,
    set: newValue => (value = newValue),
  };
}

// value는 노출된 함수를 통해서만 접근/수정 가능함 (데이터 은닉)
const state = createState(0);
console.log(state.get()); // 0
state.set(3);
console.log(state.get()); // 3
