// 재할당 불가
const constant = 'hello';
// constant = 'hi'; // error

// 객체 값 변경 가능
const apple = {
  name: 'apple',
  color: 'red',
};
// apple = {}; // error
apple.name = 'orange';
console.log(apple.name); // orange
