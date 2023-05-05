---
emoji: 🔍
title: 코드트리 Python
date: '2023-04-26 10:22:00'
author: unoung
tags: code python
categories: python 
---

<br/>
<br/>

## 👾 코드트리 기초 파이썬 문법

코드트리에서는 기본개념을 코딩테스트와 함께 배울 수 있다.
이 프로그램을 이용하여 파이썬 기초문법을 학습 후 크롤링을 해볼려고 한다.

전부 다 정리를 하는 것이 아니라 헷갈리는 부분, 정리해두면 좋을 것 같은 부분을 중점적으로 다룰 것이다.

### 공백을 사이에 두고 출력

2개의 값을 공백을 사이에 두고 출력하기 위해서는 몇가지 방법이 있다.

> print 함수에 <code>,</code> 를 사이에 두고 넣어준다.
```python
print(3,5)

3 5
```

>print 함수를 2번 사용하려면 end값을 공백으로 넣어준다.

```python
print(3, end=" ")
print(5)

3 5
```

* 만약 공백을 사이에 두고 출력하고 싶은게 아니라면?

> 구분자로 사용할 값을 sep를 이용하여 직접 설정해준다.

```python
print(3, 5, sep=":")

3:5
```

### 출력 형식

변수에 담긴 값을 원하는 형식에 맞춰 출력하기 위해서는 크게 3가지 방법이 있다.

1. 변수 포맷( <code>%d</code>,<code>%s</code> ... )과 <code>%</code> 를 사용하기

```python
a = 5
print("A is %d" % a)

b = 'apple'
print("B is %s" % b)

print("A is %d and B is %s" % (a, b))


A is 5
B is apple
A is 5 and B is apple

```

> <code>%s</code> : 문자열
<br/>
<br/>
> <code>%c</code> : 문자
<br/>
<br/>
> <code>%d</code> : 정수
<br/>
<br/>
> <code>%f</code> : 실수



2. format 함수를 이용하기

```python
a, b = 5, "apple"

print("A is {0}".format(a))
print("A is {new_a}".format(new_a=a))

print("B is {0}".format(b))
print("B is {new_b}".format(new_b=b))

print("A is {0} and B is {1}".format(a, b))
print("A is {new_a} and B is {new_b}".format(new_a=a, new_b=b))
print("B is {1} and A is {0}".format(a, b))
print("B is {new_b} and A is {new_a}".format(new_a=a, new_b=b))


A is 5
A is 5
B is apple
B is apple
A is 5 and B is apple
A is 5 and B is apple
B is apple and A is 5
B is apple and A is 5

```

3. f 문자열 포맷을 이용하기

> format 함수와 유사하지만 별도의 함수 이용 없이 문자열 앞에 f를 붙이고 변수 이름을 중괄호{}로 감싸면 원하는 변수를 해당 위치에 넣어줄 수 있게 된다.

```python

a, b = 5, "apple"

print(f"A is {a}")
print(f"B is {b}")
print(f"A is {a} and B is {b}")


A is 5
B is apple
A is 5 and B is apple

```

### 소수점 맞춰 출력하기

```python

a = 33.567884

print("%.4f" % a)

print(f"{a:.4f}")


```