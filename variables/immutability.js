// 객체 직접 수정
function displayObj(obj) {
  obj.name = 'banana';
  console.log(obj);
}
const fruit1 = { name: 'apple' };
displayObj(fruit1); // { name: 'banana' }
console.log(fruit1); // { name: 'banana' }

// 불변성 유지
function changeName(obj) {
  return { ...obj, name: 'banana' };
}
const fruit2 = { name: 'apple' };
console.log(changeName(fruit2)); // { name: 'banana' }
console.log(fruit2); // { name: 'apple' }
