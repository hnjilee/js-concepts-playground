// 요소 추가/삭제

// OL 생성 후 BODY에 추가
const ol = document.createElement('ol');
document.body.appendChild(ol);

// LI 생성 후 OL에 추가
const li = document.createElement('li');
li.textContent = 'item';
ol.appendChild(li);

console.log(ol); // <ol><li>item</li></ol>

// LI 삭제
li.remove();
console.log(ol); // <ol></ol>
