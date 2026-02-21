// 생성자 함수 호출 시, this = 새 객체

function User(name) {
  this.name = name;
}

const user1 = new User('Kim');
const user2 = new User('Lee');

console.log(user1.name); // Kim
console.log(user2.name); // Lee
