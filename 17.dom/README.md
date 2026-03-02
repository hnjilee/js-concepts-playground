# DOM

## 이 폴더의 목적

DOM이 무엇인지 이해하고,
자바스크립트가 HTML을 어떻게 객체로 조작하는지 확인한다.

## 구성

- **1.structure.md**  
  DOM이 무엇인지, HTML이 어떻게 객체 트리로 변환되는지 정리

- **2.select.js**  
  요소 선택 (`querySelector` / `querySelectorAll`)

- **3.modify.js**  
  요소 수정 (`textContent` vs `innerHTML`)

- **4.create-remove.js**  
  요소 추가/삭제 (`createElement`, `appendChild`, `remove`)

## 핵심 포인트

- DOM은 HTML을 객체 트리 구조로 표현한 것이다.
- JS는 DOM 객체를 통해 HTML 문서를 조작한다.
- DOM은 부모/자식/형제 관계를 가진다.
- `innerHTML`은 HTML을 파싱하여 DOM을 재구성한다.
- DOM 조작은 렌더링 비용이 발생할 수 있다.

## 한 문장 정리

DOM은 HTML을 객체 트리로 표현한 구조이며,
자바스크립트는 이를 조작하여 화면을 변경한다.
