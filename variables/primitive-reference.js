// Copy by value
let a = 1;
let b = a;
a = 2;
console.log(a); // 2
console.log(b); // 1

// Copy by reference
let apple = { name: 'apple' };
let orange = apple;
orange.name = 'orange';
console.log(apple); // { name: 'orange' }
console.log(orange); // { name: 'orange' }
