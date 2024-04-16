# 14. 문서 객체 모델 DOM

- HTML 문서의 구조화된 표현
- DOM 구조에 접근하여 HTML 문서의 구조, 스타일, 내용 등을 변경
- DOM은 웹 페이지, 즉, HTML 문서에 접근하여 문서를 읽고 조작할 수 있는 API(Applicaton Progrmming Interface)를 제공하는 인터페이스라고 할 수 있다.
- DOM은 자바스크립 언어와는 독립적인 구조를 가지고 있다.


## 14.1 DOM의 구조

- HTML요소(element), 속성(attribute), 내용(content) 등으로 구성된 트리 구조
- 웹 페이지 요소들과 요소들에 관련된 정보를 트리 형태로 가지고 있다.
- 모든 HTML 요소들은 객체로 정의된다.
- 자바스크립트에서는 DOM에서 제공하는 메서드(method)와 프로퍼티(property)를 통하여 HTML 요소들에 접근하거나 요소들을 수정할 수 있다.
