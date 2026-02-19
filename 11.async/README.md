# 비동기

## 이 폴더의 목적

시간이 걸리는 작업을 기다리는 동안에도 프로그램이 멈추지 않도록 하는 비동기 흐름을
`setTimeout`, `Promise`, `async/await`로 단계적으로 확인한다.

## 구성

### 1.concept

- **1.problem.js**  
  동기 코드는 작업이 끝날 때까지 흐름이 멈출 수 있다(블로킹).

- **2.solution.js**  
  비동기 작업은 완료를 기다리지 않고 다음 코드를 먼저 실행할 수 있다. (예: A, C, B)

### 2.promise

- **1.resolve.js**  
  Promise는 비동기 결과를 표현하는 객체이며, 성공(resolve) 결과를 `then`으로 처리한다.

- **2.reject.js**  
  실패(reject)는 `catch`로 처리한다.

### 3.async-await

- **1.basic.js**  
  Promise chaining 대신 `async/await`로 비동기 코드를 동기 코드처럼 작성할 수 있다.

- **2.try-catch.js**  
  `async/await`에서는 `try/catch`로 비동기 에러를 처리하고, 필요하면 대체값(fallback)으로 흐름을 이어갈 수 있다.

## 핵심 포인트

- 비동기 작업은 결과가 “나중에” 도착하므로, then/await로 결과를 처리해야 한다.
- Promise는 성공(resolve)과 실패(reject) 상태를 가지며, then/catch로 처리한다.
- async/await는 가독성을 높이고, try/catch로 에러 흐름을 제어한다.

## 한 문장 정리

비동기는 작업 완료를 기다리지 않고 흐름을 이어가며, 결과는 Promise/await로 나중에 처리한다.
