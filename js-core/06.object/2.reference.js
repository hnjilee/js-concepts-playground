// 참조 공유
// 한쪽 수정이 다른 쪽에 영향

let user1 = { name: 'Lee' };
let user2 = user1; // 참조가 복사됨
user2.name = 'Kim';
console.log(user1.name); // Kim
