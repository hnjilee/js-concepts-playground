// 이벤트 위임
// 다수의 자식 요소에 각각 리스너를 등록하지 않고,
// 부모에만 등록해서 자식에 발생한 이벤트를 감지

const ul = document.querySelector('ul');

ul.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    console.log('li clicked');
  }
});
