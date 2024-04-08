# 1. html에 script 써보기
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>자바스크립트 스터디</title>
</head>
<body>
    <p id="show"></p>
    <script>
        document:getElementById("show").innerHTML = "안녕하세요.";
    </script>
</body>
</html>
```

## 1.1 데이터 출력
- innerHTML : 브라우저 안에 있는 HTML 요소에 데이터 출력
- document.write() : 브라우저에 간단한 데이터 출력
- alert() : 알림창에 데이터 출력
- console.log() : 브라우저 콘솔에 데이터 출력

### 1.1

```js
 <script>
        document:write(10 +20);
    </script>
```

### 1.1.3 alert()

- 브라우저 개발자 도구 console에 출력

```js
<script>console.log(10 + 20);</script>
```

## 2.1 변수 선언

- var, let, const 키워드
- const를 주로 사용하고 안되면 let으로 바꾸자

```js
let name = "키워드 let으로 변수 name을 선언";
       console.Log(name);
       // 필요에 따라 값을 재할당 할 수 있다.
       keyword = "변수 name에 홍길동 저장 name은 홍길동 값을 가짐";
       console.Log(keyword);
```

## 2.2 변수 이름 짓기

- 변수 이름에는 영어, 숫자, 밑줄, $ 사용 가능
- **숫자로 시작하면 안됨**
- 대소문자 구분
- 일반적으로 카멜케이스 사용

```js
const a = 5;
const font1 = "돋움"
const _price = 30000;
const maxwidth = 600;
cons max_width = 800;
```

