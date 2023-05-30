---
emoji: 🖥
title: 코딩테스트(JS)_01
date: '2023-05-20 10:22:00'
author: unoung
tags: 코딩테스트
categories: 코딩테스트
---

<br/>

## 코딩 테스트용 JS 빠른 출력

- JS로 코딩 테스트 문제를 풀 때, 출력 과정만으로 시간 초과를 받을 때가 있다.

- 출력 시간을 단축하기 위한 방법

<br/>

```JS
let answer = '';

/*
여러 출력 결과를 한 줄에 하나씩 출력할 때 매번 console.log()를 실행하지 않고,
하나의 문자열에 결과를 저장해서 한꺼번에 출력하는 것이 대개 더 빠르게 수행됨
*/

for(let i = i; i <= 100; i ++){
    answer += i + '\n'; //문자열로 변환하여 기록
}

console.log(answer);
```

<br/>
<br/>

## 코딩 테스트용 JS 기본 입력 - fs 모듈

- 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용한다.

- 예를 들어 /dev/stdin 파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.

- 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

<br/>

```JS
// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//let input = fs.readFileSync('input.txt').toString().split('\n');

console.log(input);

```

<br/>
<br/>

## 코딩 테스트용 JS 기본 입력 - readline 모듈

- 한 줄씩 입력을 받아서 처리하여 정답을 출력할 때는 readline 모듈을 사용할 수 있다.

<br/>

```JS
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line',function(line){
    //콘솔 입력 창에서 줄바꿈(enter)를 입력할 때마다 호출
    input.push(line);
}).on('close',function(){
    //콘솔 입력 창에서 ctrl+c 혹은 ctrl+d 를 입력할 때마다 호출(입력의 종료)
    console.log(input);
    process.exit();

})

```

<br/>
<br/>

## Array.prototype.reduce()

- 배열의 모든 원소에 대해 특정한 연산을 순차적으로 적용할 때 reduce()를 사용한다.

<br/>

```JS
/*
reduce() 메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤에 하나의 결과를 반환한다.
reducer의 형태 : (accumulater, currentValue) => (반환값)
- 배열의 각 원소를 하나씩 확인하며, 각 원소는 currentValue에 해당한다.
- 반환값은 그 이후의 원소에 대하여 accumulater에 저장된다.
*/

let data = [5,2,9,8,4];

//minValue 구하기 예제
let minValue = data.reduce((a,b) => Math.min(a,b));
console.log(minValue); //2

//원소의 합계 구하기 예제
let summary = data.reduce((a,b) => a + b );
console.log(summary); //28

```

<br/>
<br/>

## 배열 초기화 방법

<br/>

```JS

// 직접 값을 설정하여 초기화
let arr = [8,1,4,5,6];

//길이가 5이고 모든 원소의 값이 0인 배열 초기화
let arr = new Array(5),fill(0);

```

<br/>
<br/>

## 집합 자료형

<br/>

```JS

let mySet = new Set(); //집합 객체 생성

// 여러 개의 원소 삽입
mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);

console.log(`원소 개수${mySet.size}`); //중복은 제외해서 3개
console.log(`원소 7을 포함하는가? ${mySet.has(7)}`);

//원소 5 제거
mySet.delete(5);

//원소를 하나씩 출력
for(let item of mySet) console.log(item);

```

<br/>
<br/>

## 소수점 아래 특정 자리에서 반올림

- 실수를 출력할 때 소수점 아래 특정 자리에서 반올림 할 수 있다.

<br/>

```JS

// 특정 실수에 대하여 toFixed()를 이용해 소수점 아래 둘째 자리까지 출력

let x = 123.456

console.log(x.toFixed(2));

```

<br/>
<br/>

## filter()

- filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

<br/>

> 코딩 테스트에서 배열 중 요소를 필터링 해야할 때 사용함

```JS

function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered 는 [12, 130, 44]


let lost_student = [1,2,3,4];

lost_student = lost_student.filter(v => v !== 5);

// lost_student 배열 요소 중  5가 아닌거 필터링 해서 재배열

```

<br/>
<br/>

## includes()

- includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별한다.

<br/>

> 코딩 테스트에서 배열 중 요소를 포함하고 있는지 판별할 때 사용함
<br/>

> 참고: 문자나 문자열을 비교할 때, includes()는 대소문자를 구분한다.


```JS
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false

//reserve,lost 는 배열
 let reserve_student = reserve.filter(v => !lost.includes(v)).sort();

 // reserve를 필터링한다 lost 배열 중 reserve배열의 요소를 가지고 있지 않은 애들을 배열로 만들어서 sort함


```




```toc

```
