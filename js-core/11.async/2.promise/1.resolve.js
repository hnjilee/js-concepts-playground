// Promise = 비동기 결과를 표현하는 객체
// 작업의 상태를 나타냄: pending/fulfilled/rejected

// resolve → 성공
// resolve는 성공 상태로 만들고, then으로 성공을 처리한다.

// Promise 생성
const promise = new Promise(
  // 비동기 작업이 성공하면 결과값(resolve의 인자)을 then에 전달함
  resolve => setTimeout(() => resolve('done'), 1000),
);

// 작업 완료 전에는 pending 상태
console.log(promise); // Promise { <pending> }

// Promise 사용
promise.then(result => {
  // 작업이 완료되어 결과를 확인할 수 있음
  console.log(result); // done
  console.log(promise); // Promise { 'done' }
});
