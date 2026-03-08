# 모듈

## 이 폴더의 목적

코드를 파일 단위로 분리하고, `export` / `import`로 필요한 코드만 연결해서 사용하는 방식을 코드로 확인한다.

## 구성

- **math.js**  
  `add`, `MIN_NUMBER`를 **named export**로 외부에 공개한다.

- **app.js**  
  `import { ... }`로 필요한 코드를 가져와 사용한다.

## 핵심 포인트

- 모듈은 코드를 파일 단위로 분리하는 구조다.
- `export`로 공개하고 `import`로 가져온다.
- named export는 `import { 이름 }` 형태로 가져온다.

## 한 문장 정리

모듈은 코드를 분리하고 import/export로 연결하는 방식이다.
