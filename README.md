# nodejs-pythonic-sync-input

## 개요

Node.js의 ```stdin``` 기능을 파이썬과 유사한 동기 방식의 ```input(parameter)```으로 사용할 수 있게 만든 모듈입니다. 

## Pythonic-input 적용 방법

사용을 원하는 프로젝트나 모듈의 디렉터리에 해당 파일을 추가하시고, 아래 코드를 사용을 원하는 프로젝트 코드 상단에 추가해주세요.

```jsx
const { input } = require("./pythonic-input/pythonicInput.js");
```

## 기본 사용 방법

### 1) ```parameter``` 없이 그냥 사용

```jsx
//기본적인 사용법
const test = input();

console.log(test);
console.log(typeof test);
```

```jsx
<<실행 결과>>

>> zoodasa // 사용자의 입력
>> zoodasa // console.log로 인한 출력
>> string //결과는 기본적으로 string 형태로 저장됩니다.
```

### 2) ```parameter``` 와 함께 사용

```parameter```를 써서 받을 입력값에 대한 간단한 표기를 할 수도 있습니다.

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

## 응용 사용법

### 1) ```String``` 클래스 메서드와의 연계

```input(parameter)```는 기본적으로 ```String``` 인스턴스를 결과값으로 반환합니다. 

따라서 ```String``` 클래스 혹은 ```String```의 상위 클래스 프로토타입 메서드 역시 사용할 수 있습니다.

```jsx
//응용 사용법 1
//기본적으로 string 인스턴스를 반환합니다.
//따라서 String 클래스와 그것을 상속받는 상위 클래스의 프로토타입 메서드를 사용할 수 있습니다.
const test = input("지금 가장 보고 싶은 사람: ").split(" ");//띄어쓰기로 split 구분
console.log(test);
console.log(typeof test);
```

```jsx
<<실행 결과>>

>> 지금 가장 보고 싶은 사람: zoodasa 그리워 보고싶어 잘지내 // parameter 출력 및 사용자의 입력
>> ['zoodasa', '그리워', '보고싶어', '잘지내'] // console.log로 인한 출력
>> array //split() 메서드의 영향으로 array 형태로 저장되었습니다.
```

### 2) ```parseInt``` 혹은 ```parseFloat``` 메서드와의 연계

```input(parameter)```는 ```parseInt``` 혹은 ```parseFloat``` 메서드와 연계하여 사용이 가능합니다. 

아래는 ```parseInt``` 의 사용 예제입니다.

```jsx
//응용 사용법 2 - 1
//기본적으로 string 인스턴스를 반환합니다.
//따라서 ```parseInt``` 메서드와 연계하여 사용이 가능합니다.
const test = parseInt(input("숫자를 입력하세요: "));//입력한 문자열을 정수로 변환
console.log(test);
console.log(typeof test);
```

```jsx
<<실행 결과>>

>> 숫자를 입력하세요: 20230219 // parameter 출력 및 사용자의 입력
>> 20230219 // console.log로 인한 출력
>> number //parseInt() 메서드의 영향으로 number 형태로 저장되었습니다.
```
아래는 ```parseFloat``` 의 사용 예제입니다.
```jsx
//응용 사용법 2
//기본적으로 string 인스턴스를 반환합니다.
//따라서 ```parseFloat``` 메서드와 연계하여 사용이 가능합니다.
const test = parseFloat(input("숫자를 입력하세요: "));//입력한 문자열을 실수로 변환
console.log(test);
console.log(typeof test);
```

```jsx
<<실행 결과>>

>> 숫자를 입력하세요: 20230219e-4 // parameter 출력 및 사용자의 입력
>> 2023.0219 // console.log로 인한 출력
>> number //parseFloat() 메서드의 영향으로 number 형태로 저장되었습니다.
```
