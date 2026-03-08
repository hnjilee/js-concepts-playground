// 문제: 비슷한 구조의 객체 반복
// => 코드 중복, 유지보수 어려움

const user1 = {
  name: 'Kim',
  greet() {
    console.log('hi'); // 코드 수정 시 user2도 수정해야 함
  },
};

const user2 = {
  name: 'Lee',
  greet() {
    console.log('hi');
  },
};
