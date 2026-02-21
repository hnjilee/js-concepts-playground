// 일반 함수 호출 시, this = undefined (strict mode)

'use strict';

function test() {
  console.log(this);
}

test(); // undefined
