// 메서드 호출 시, this = 객체

const user1 = {
  name: 'Kim',
  sayHi() {
    console.log(`hi ${this.name}`);
  },
};

const user2 = {
  name: 'Lee',
  sayHi() {
    console.log(`hello ${this.name}`);
  },
};

user1.sayHi(); // hi Kim
user2.sayHi(); // hello Lee

// 선언 시의 객체 X
// 호출 시의 객체 O
user2.sayHi = user1.sayHi;
user2.sayHi(); // hi Lee
