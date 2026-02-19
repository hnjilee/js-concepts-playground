// 문제: Promise chaining → 가독성 떨어짐

function mockFetch(url) {
  return Promise.resolve(`response (fetched from ${url})`);
}

function process(response) {
  return Promise.resolve(`data - processed ${response}`);
}

mockFetch('URL')
  .then(res => process(res))
  .then(data => console.log(data)); // data - processed response (fetched from URL)

// 해결: async/await → 동기 코드처럼 작성

async function load(url) {
  const res = await mockFetch(url); // await는 Promise가 완료될 때까지 기다림
  const data = await process(res);
  console.log(data);
}

load('URL'); // data - processed response (fetched from URL)
