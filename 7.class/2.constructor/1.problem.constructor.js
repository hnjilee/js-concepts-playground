// 문제: 초기값 설정 X -> 메서드 동작 오류

class Counter {
  increment() {
    this.count += 1;
    return this.count;
  }
}

const c1 = new Counter();
console.log(c1.count); // undefined
console.log(c1.increment()); // undefined + 1 → NaN
