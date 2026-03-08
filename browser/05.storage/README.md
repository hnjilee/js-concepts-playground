# Storage

## 이 폴더의 목적

브라우저가 클라이언트에 데이터를 저장하는 방법을 이해하고,
Web Storage(localStorage, sessionStorage)와 Cookie의 차이를 정리한다.

## 구성

- **1.web-storage.md**  
  웹 스토리지의 목적과 종류

- **2.local-vs-session.js**
  - localStorage와 sessionStorage의 차이
  - `JSON.stringify`로 객체 → JSON 변환 후 저장

- **3.cookie.md**  
  쿠키의 기본 개념과 웹 스토리지와의 차이

## 핵심 포인트

- 브라우저는 웹 스토리지를 통해 클라이언트 데이터를 저장할 수 있다.
- localStorage는 영구 저장소이고 sessionStorage는 탭 단위 저장소이다.
- 웹 스토리지는 문자열 기반 저장소이기 때문에 객체는 JSON으로 변환하여 저장한다.
- 쿠키는 HTTP 요청마다 서버로 자동 전송되는 데이터이다.

## 한 문장 정리

브라우저는 웹 스토리지와 쿠키를 통해 데이터를 저장할 수 있으며,
웹 스토리지는 클라이언트 저장소이고 쿠키는 서버와 상태를 공유하기 위한 저장 방식이다.
