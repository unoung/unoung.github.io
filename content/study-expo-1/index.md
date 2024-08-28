---
emoji: 🖥
title: Expo-router
date: '2024-08-28'
author: unoung
tags: expo
categories: expo
---

<br/>

## expo-router란?

### 1. 파일기반의 라우팅

- expo-router는 파일기반의 라우팅으로, 파일과 디렉토리에 따라서 자동으로 경로가 생성된다

- 예를 들어 'app/home.js' 파일이라면 '/home' 경로가 된다.

<br/>
### 2. 중괄호, 대괄호

- 중괄호는 경로에 포함되지 않으며 생략된다

  - 예를 들어 (auth) 폴더의 login.js 파일은 경로가 '/login'으로 지정된다

- 대괄호는 동적 경로 지정이 가능하다
  <br/>

```js
app/
  ├─ index.js            // 루트 경로 '/'
  ├─ about.js            // '/about'
  ├─ [id].js             // '/:id' (동적 경로)
  ├─ board/
  │    ├─ index.js       // '/board'
  │    ├─ settings.js    // '/board/settings'
  │    └─ profile.js     // '/board/profile'
  └─ layout.js           // 공통 레이아웃

```

<br/>

### 3. 기능 및 장점

- 코드 분할 : 페이지 단위의 코드를 분할해서 작성 할 수 있다
- deep linking: 딥링크가 자동으로 가능
- SEO 친화적
- Tab navigator, Stack navigator 등 다양한 네비게이션 옵션 사용 가능

<br/>

### 4. router object 종류

- navigate : 이미 같은 경로에 있는 경우 새로운 화면을 추가하지 않고, 기존화면 재사용

- push : 스택에 새로운 화면을 추가. 동일 경로로 push하면 스택 쌓임 -> 주의: 여러번 같은 경로 누르면 동일화면이 여러번 중첩돼서 back이 계속 눌러질 수 있음

- replace: 현재 화면을 새로운 화면으로 교체, 뒤로가기 스택에서 기존화면 제거 (로그인 후 홈화면으로 이동할 때 사용)

- back: 뒤로가기

- canGoBack: 뒤로 갈 화면이 있는지 판별해줌 boolean 타입

- setParams: 현재화면에서 url에 포함된 파라미터를 업데이트함, 주로 동적 데이터 업데이트 할 때 사용, 예를 들어 filter 처리를 한다고 하면 router.setParams({ filter: 'new' }) 호출하면 url에 '?filter=new'를 추가되거나 filter 파라미터가 업데이트 된다. 이로 인해 화면이 리렌더링되고 ui가 새로 만들어짐<br/>
  화면전환이 발생하지 않고, 화면의 상태만 바뀜

<br/>

### 5. setParams vs push, replace

- setParams:

  1. URL의 파라미터만 변경. 화면 전환 없음
  2. 현재 화면에 머무르면서 동적 데이터를 업데이트할 때 사용

- push:
  1. 새로운 화면을 스택에 추가하여 이동
  2. 네비게이션 스택이 쌓이므로 뒤로 가기 기능 유지
- replace:

  1. 현재 화면을 새로운 화면으로 대체
  2. 뒤로 가기를 눌러도 대체된 이전 화면으로 돌아갈 수 없음

<br/>

### 6. Slot

- 경로만든 폴더 안에 \_layout.tsx는 이런식으로 구성한다

```js
import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <View>
      <Slot />
    </View>
  );
}
```

여기서 Slot은 **자식 경로를 렌더링**한다. childern과 비슷함

### 7. Stack

- stack에 따라서 ios, android의 애니매이션이 적용되는데 (iosr경우 오른쪽에서 애니메이션 나오는거) 예를 들어
  폴더 구조가 app > \_layout.tsx, index.tsx, details.tsx가 있다면

```js
//_layout.tsx

<Stack
  screenOptions={{
    headerShown: false,
    statusBarColor: 'transparent', //공통 헤더바 옵션
  }}
>
  <Stack.Screen name="home" /> //index.tsx 인데 이름이 home 스택의 첫번째 경로
</Stack>
```

```js
//index.tsx

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen // 이렇게하면 해더바 동적으로 구성 가능
        options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Text>Home Screen</Text>
      <Link href={{ pathname: 'details', params: { name: 'Bacon' } }}>Go to Details</Link>
    </View>
  );
}
```

```js
//details.tsx

export default function Details() {
  const router = useRouter();
  const params = useLocalSearchParams(); // 파라미터 가져오기

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: params.name,
        }}
      />
      <Text
        onPress={() => {
          router.setParams({ name: 'Updated' });
        }}
      >
        Update the title
      </Text>
    </View>
  );
}
```

**❓ 근데 Stack.Screen 이 screen 만드는거 아닌가? Stack.Screen이 헤더로만 사용이 가능한건가? 내 원래 예상은 이거였다.**

```js
//_layout.tsx

<Stack
  screenOptions={{
    headerShown: false,
    statusBarColor: 'transparent', //공통 헤더바 옵션
  }}
>
  <Stack.Screen name="home" /> //index.tsx 인데 이름이 home 스택의 첫번째 경로
  <Stack.Screen name="details" /> //index.tsx 인데 이름이 home 스택의 첫번째 경로
</Stack>

// 한번에 스크린 넣기 -> Stack.Screen은 스크린 만들어주는 거니깐
```
