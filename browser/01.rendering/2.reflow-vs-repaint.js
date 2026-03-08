// Reflow vs Repaint

const element = document.querySelector('div');

// Reflow
// 위치/크기 변경 시 발생할 수 있음
element.style.width = '200px';

// Repaint (paint만 발생 가능한 경우)
// 위치/크기 변화 없음
element.style.color = 'red';
