// 해결: constructor에서 초기값 설정

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count += 1;
    return this.count;
  }
}

const c1 = new Counter();
console.log(c1.count); // 0
console.log(c1.increment()); // 1
