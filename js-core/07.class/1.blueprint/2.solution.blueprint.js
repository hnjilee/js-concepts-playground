// 해결:
// 클래스 = 객체 템플릿/설계도

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('hi');
  }
}

const user1 = new User('Kim');
const user2 = new User('Lee');
user1.greet(); // hi
user2.greet(); // hi
