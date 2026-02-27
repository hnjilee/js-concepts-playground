# Rendering

## 이 폴더의 목적

브라우저가 화면을 그리는 과정을 이해하고,
layout(reflow)이 왜 비용이 큰지,
DOM 조작을 어떻게 최소화해야 하는지 흐름으로 정리한다.

## 구성

- **1.pipeline.md**  
  브라우저 렌더링 5단계 (DOM → CSSOM → Render Tree → Layout → Paint)

- **2.reflow-vs-repaint.js**  
  위치/크기 변경과 색상 변경의 차이

- **3.batch.js**  
  DOM 조작을 묶어서 처리하는 전략

- **4.layout-trashing.js**  
  읽기/쓰기 혼합 시 강제 Layout이 발생하는 현상

## 핵심 포인트

- 브라우저는 DOM과 CSSOM을 결합해 render tree를 만들고 layout과 paint를 수행한다.
- Layout(reflow)은 트리 구조 기반 계산이므로 비용이 크다.
- DOM 조작은 Layout을 유발할 수 있다.
- 읽기와 쓰기를 섞으면 layout thrashing이 발생할 수 있다.
- 조작을 묶고 최소화하는 전략이 필요하다.

## 한 문장 정리

DOM 변경은 layout을 발생시킬 수 있고 비용이 크기 때문에,
조작을 최소화해야 한다.
