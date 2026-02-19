// async/await에서는 try/catch로 비동기 에러를 처리한다.

function mockFetch(url) {
  return Promise.reject(new Error('failed to fetch'));
}

function process(response) {
  return Promise.resolve(`data - processed ${response}`);
}

// Promise chaining
mockFetch('URL')
  // 에러 처리 콜백을 등록함
  .catch(err => {
    console.log(err.message); // failed to fetch
    return 'alternative'; // 대체할 값을 반환함
  })
  .then(res => process(res)) // 대체값을 받아서 처리함
  .then(data => console.log(data)); // data - processed alternative

// async/await
async function load(url) {
  let res;
  try {
    res = await mockFetch(url); // 에러 발생 가능 코드를 try로 감쌈
  } catch (err) {
    // 여기서 에러를 처리함
    console.log(err.message); // failed to fetch
    res = 'alternative'; // 대체할 값을 반환함
  }

  const data = await process(res); // 대체값을 받아서 처리함
  console.log(data);
}

load('URL'); // data - processed alternative
