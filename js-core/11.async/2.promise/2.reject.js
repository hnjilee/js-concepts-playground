// reject → 실패
// reject는 실패 상태로 만들고, catch는 실패를 처리한다.

// Promise 생성
const promise = new Promise(
  // 비동기 작업이 실패하면 실패 이유(reject의 인자)를 catch에 전달함
  (resolve, reject) => setTimeout(() => reject('error'), 1000),
);

// 작업 완료 전에는 pending 상태
console.log(promise); // Promise { <pending> }

// Promise 사용
promise
  .then(result => console.log(result)) // 실행되지 않음
  // 에러 처리 콜백을 등록함
  .catch(err => {
    console.log(`caught: ${err}`); // caught: error
    console.log(promise); // Promise { <rejected> 'error' }
  });
