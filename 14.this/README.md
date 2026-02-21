# this

## 이 폴더의 목적

this가 함수 선언 위치가 아니라 호출 방식에 따라 결정된다는 점과,
화살표 함수는 외부 this를 사용함을 코드로 확인한다.

## 구성

- **1.method.js**  
  메서드 호출 시 this는 호출한 객체를 가리킨다.

- **2.constructor.js**  
  생성자 함수 호출 시 this는 새로 생성되는 객체를 가리킨다.

- **3.function.js**  
  일반 함수 호출 시 this는 undefined이다. (strict mode)

- **4.arrow-function.js**  
  화살표 함수는 자신의 this를 가지지 않고, 외부 this를 사용한다.

- **5.arrow-function-callback.js**  
  화살표 함수는 콜백으로 전달해도 외부 this가 유지된다.  
  반면 일반 함수를 콜백으로 전달하면 this는 호출 방식에 의해 undefined가 된다.

## 핵심 포인트

- this는 함수 호출 방식에 따라 결정된다.
- `obj.method()` 호출에서는 this = obj
- `new` 호출에서는 this = 새 객체
- 일반 함수 호출에서는 this = undefined (strict mode)
- 화살표 함수는 외부 this를 사용한다.

## 한 문장 정리

this는 호출 방식에 따라 결정되며, 화살표 함수는 외부 this를 사용한다.
