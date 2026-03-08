// 화살표 함수의 this = 외부 this

// 화살표 함수는 자신의 this를 가지지 않고, 외부 스코프의 this를 사용한다.
// 선언된 위치에서 제일 근접한 상위 스코프의 this를 캡처함

const user = {
  name: 'Kim',

  normal() {
    console.log(this.name);
  },

  arrow: () => {
    console.log(this.name);
  },
};

user.normal(); // Kim (this = 호출한 객체 user)
user.arrow(); // undefined (this = user가 아니라 전역의 this)
