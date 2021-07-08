# Dev Buddy

    👨‍💻👩‍💻 개발 스터디 모집 게시판 만들기

### ♻ 기술 스택

![stack](./databases/stack.png)

![front](https://img.shields.io/badge/Frontend-Vue-lightgreen?style=for-the-badge)
![back](https://img.shields.io/badge/Backend-Node-green?style=for-the-badge&logo=express)
![db](https://img.shields.io/badge/DB-Mysql-blue?style=for-the-badge&logo=mysql)

### 🔰 주요 라이브러리

- Frontend

  - yarn: 패키지 매니져
  - vuex: 전역 상태 관리 라이브러리
  - vuesax: 스타일 프레임워크
  - axios: HTTP 비동기 통신 라이브러리

- Backend
  - cors
  - bcrypt: 암호화 라이브러리
  - morgan: HTTP 로거
  - dotenv: 환경 변수 라이브러리

### 💬 설계

![erd](./databases/erd.png)

#### user

| 필드명   | 타입          | 특성        |
| -------- | ------------- | ----------- |
| uid      | int           | primary key |
| email    | varchar(50)   | unique key  |
| name     | varchar(30)   | not null    |
| password | vharchar(255) | not null    |

#### post

| 필드명  | 타입          | 특성                  |
| ------- | ------------- | --------------------- |
| pid     | int           | primary key           |
| title   | varchar(255)  | not null              |
| content | text          | not null              |
| user_id | vharchar(255) | foreign key(user.uid) |

### 현재까지 구현된 기능들

![capture](./databases/capture.gif)

- [x] 회원 가입
- [x] 로그인/ 로그아웃/ 로그인 유지
- [x] 회원 정보 전역 상태 관리
- [x] 새로고침 시 Vuex 스토어 초기화 문제
- [x] 컴포넌트 별 기본 폼 작성
- [x] 폼 유효성 검사 (서버)
- [x] 현재 위치 기반 날씨 정보 가져오기
- [x] 기본 쿼리문 작성 (생성, 조회)
- [x] 토스트 팝업 알림창 적용
- [x] 데이터 바인딩 로딩 바 적용

### 📌 TODO

- [ ] 네비게이션 가드
- [ ] 폼 유효성 검사 (클라이언트, 서버)

### ‼ 로컬 테스트 방법

```bash
// Server
$ yarn server
```

```bash
// Client
$ yarn client
```

```bash
// Dev
$ yarn dev
```
