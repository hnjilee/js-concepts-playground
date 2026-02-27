// Reflow 최소화 전략 - Layout thrashing 피하기

const element = document.querySelector('div');

// Layout thrashing
// DOM 쓰기와 읽기를 섞음 → Layout을 강제로 여러 번 유발

// 문제: Batch를 막음
// 읽기 시점에 최신 layout 정보가 필요하므로
// 브라우저가 강제로 layout을 수행한다.
element.style.width = '100px'; // 쓰기
console.log(element.offsetWidth); // 읽기 → 강제 Layout
element.style.height = '100px'; // 쓰기
console.log(element.clientHeight); // 읽기 → 강제 Layout

// 개선: 쓰기를 한 번에
// 읽기와 쓰기를 분리하면 layout thrashing을 방지할 수 있다.
element.style.cssText = `width:200px; height:200px;`;
