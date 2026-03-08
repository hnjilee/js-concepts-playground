// Reflow 최소화 전략 - Batch 처리하기

const element = document.querySelector('div');

// 문제: Layout 여러 번 발생 가능
element.style.width = '200px';
element.style.height = '200px';
element.style.margin = '20px';

// 개선: 한 번에 묶어서 처리
element.style.cssText = `
  width: 200px;
  height: 200px;
  margin: 20px;
`;
