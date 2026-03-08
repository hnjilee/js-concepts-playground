// 콜백 함수로 화살표 함수가 사용되는 이유

'use strict';

// 화살표 함수는 선언 시 외부 스코프의 this를 캡처하기 때문에,
// 콜백으로 전달해도 this가 유지된다.

const user1 = {
  name: 'Kim',

  sayHi() {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  },
};

user1.sayHi(); // Kim (this = sayHi의 this(user1))

// 일반 함수 콜백은 호출 방식에 따라 this가 결정된다.
// function() 형태로 호출되므로
// strict mode 기준으로 this는 undefined가 된다.

const user2 = {
  name: 'Kim',

  sayHi() {
    setTimeout(function () {
      console.log(this.name);
    }, 100);
  },
};

user2.sayHi(); // undefined (this = undefined)
