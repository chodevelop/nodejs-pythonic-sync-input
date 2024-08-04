# pythonic-input (’sync-input’ in Node.js)

## 개요

해당 모듈은 Node.js의 stdin을 파이썬과 유사한 동기 방식의 input(message)으로 사용할 수 있게 전환합니다. 사용을 원하는 프로젝트나 모듈의 디렉터리에 해당 파일을 추가하시고, 아래 코드를 사용을 원하는 프로젝트 코드 상단에 추가해주세요.

```jsx
//pythonic-input 모듈 추가
const { input } = require(”./pythonic-input/pythonicInput.js);
```

## pythonic-input 사용법

용법은 아래와 같습니다.

### 1. 기본적인 사용법

#### 1) parameter 없이 그냥 사용

```jsx
//기본적인 사용법
const test = input();

console.log(test);
console.log(typeof test);

```

```jsx
<<실행 결과>>
>> 테스트입니다. // 사용자의 입력
>> 테스트입니다. // console.log로 인한 출력
>> string //결과는 기본적으로 string 형태로 저장됩니다.
```

#### 2) parameter와 함께 사용

parameter를 써서 받을 입력값에 대한 간단한 표기를 할 수도 있습니다.

```jsx
//기본적인 사용법 2: parameter를 써서 받을 입력값에 대한 간단한 표기를 할 수도 있습니다.
const test = input("지금 가장 보고 싶은 사람: ");
console.log(test);
console.log(typeof test);
```

```jsx
<<실행 결과>>
>> 지금 가장 보고 싶은 사람: zoodasa // 입력한 parameter가 출력되고 사용자가 입력했습니다.
>> zoodasa // console.log로 인한 출력
>> string //parameter가 있어도 결과는 string 형태로 저장됩니다.
```

### 2. 응용 사용법

기본적으로 string 인스턴스를 반환합니다. 따라서 String 클래스와 그것을 상속받는 상위 클래스의 프로토타입 메서드를 사용할 수 있습니다.

```jsx
//응용 사용법
//기본적으로 string 인스턴스를 반환합니다.
//따라서 String 클래스와 그것을 상속받는 상위 클래스의 프로토타입 메서드를 사용할 수 있습니다.
const test = input("지금 가장 보고 싶은 사람: ").split(" ");//띄어쓰기로 split 구분
console.log(test);
```

```jsx
<<실행 결과>>
>> "지금 가장 보고 싶은 사람: zoodasa 그리워 보고싶어 잘지내 //parameter 출력 및 사용자의 입력
>> ['zoodasa', '그리워', '보고싶어', '잘지내'] //console.log로 인한 출력
>> array //.split() 메서드의 영향으로 array 형태로 저장되었습니다.
```
