# 🚀 WeMake - Modern React Boilerplate

현대적인 웹 개발을 위한 React Router v7 + Tailwind CSS v4 + TypeScript 보일러플레이트입니다.

[![React Router v7](https://img.shields.io/badge/React%20Router-v7-blue.svg)](https://reactrouter.com/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC.svg)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![pnpm](https://img.shields.io/badge/pnpm-Fast-orange.svg)](https://pnpm.io/)

## ✨ 주요 기능

- **🚀 React Router v7** - 최신 라우팅 시스템과 SSR 지원
- **🎨 Tailwind CSS v4** - 유틸리티 우선 CSS 프레임워크
- **🔷 TypeScript** - 타입 안전성을 제공하는 JavaScript 확장
- **⚡ Vite** - 빠른 개발 서버와 빌드 도구
- **🎯 Shadcn UI** - 재사용 가능한 컴포넌트 라이브러리
- **🔧 pnpm** - 빠르고 효율적인 패키지 매니저
- **📱 반응형 디자인** - 모든 디바이스에서 최적화된 경험
- **🌙 다크 모드** - 자동 다크/라이트 모드 전환

## 🛠️ 기술 스택

| 기술         | 버전   | 설명                |
| ------------ | ------ | ------------------- |
| React Router | v7     | 최신 라우팅 시스템  |
| Tailwind CSS | v4     | 유틸리티 우선 CSS   |
| TypeScript   | 5.8    | 타입 안전성         |
| Vite         | 6.3    | 빌드 도구           |
| Shadcn UI    | latest | 컴포넌트 라이브러리 |
| pnpm         | latest | 패키지 매니저       |

## 🚀 시작하기

### 필수 요구사항

- Node.js 18+
- pnpm (권장) 또는 npm

### 설치

```bash
# 저장소 클론
git clone https://github.com/your-username/react-router-v7-boilerplate.git
cd react-router-v7-boilerplate

# 의존성 설치
pnpm install
```

### 개발 서버 실행

```bash
# 개발 서버 시작 (http://localhost:5173)
pnpm dev

# TypeScript 타입 검사 + React Router 타입 생성
pnpm typecheck
```

### 프로덕션 빌드

```bash
# 프로덕션 빌드 생성
pnpm build

# 프로덕션 서버 실행
pnpm start
```

## 📁 프로젝트 구조

```
wemake/
├── app/
│   ├── common/           # 애플리케이션 전역 공유 코드
│   │   ├── components/   # 도메인 무관 재사용 컴포넌트
│   │   │   └── ui/      # Shadcn UI 기반 디자인 시스템
│   │   └── pages/       # 페이지 레벨 컴포넌트
│   ├── features/        # 도메인별 기능 모듈
│   │   └── [domain]/    # 각 도메인은 독립된 구조:
│   │       ├── components/  # 도메인 전용 컴포넌트
│   │       ├── pages/      # 페이지 레벨 컴포넌트
│   │       ├── queries/    # 데이터 레이어
│   │       └── schemas/    # 타입/검증 스키마
│   ├── lib/             # 순수 유틸리티 함수
│   ├── app.css          # Tailwind CSS 설정
│   ├── routes.ts        # 라우트 정의
│   └── root.tsx         # 루트 컴포넌트
├── public/              # 정적 파일
└── docs/               # 문서
```

## 🎨 커스텀 브레이크포인트

Tailwind CSS v4에서 커스텀 브레이크포인트를 사용할 수 있습니다:

```tsx
// 기본 브레이크포인트
<div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">

// 기본 브레이크포인트 사용
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
```

### 사용 가능한 브레이크포인트

- **sm**: 640px (작은 화면)
- **md**: 768px (중간 화면)
- **lg**: 1024px (큰 화면)
- **xl**: 1280px (매우 큰 화면)
- **2xl**: 1536px (초대형 화면)

## 🔧 개발 명령어

```bash
pnpm dev        # 개발 서버 시작 (http://localhost:5173)
pnpm build      # 프로덕션 빌드 생성
pnpm start      # 프로덕션 서버 실행
pnpm typecheck  # TypeScript 타입 검사 + React Router 타입 생성
```

## 🚀 배포

### 지원하는 배포 플랫폼

- **Vercel** - React Router v7 최적화
- **Netlify** - 정적 사이트 호스팅
- **Railway** - 풀스택 배포
- **Fly.io** - 글로벌 배포
- **AWS ECS** - 엔터프라이즈급 배포
- **Google Cloud Run** - 서버리스 배포

## 📚 문서

- [React Router v7 공식 문서](https://reactrouter.com/)
- [Tailwind CSS v4 공식 문서](https://tailwindcss.com/docs)
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
- [Shadcn UI 컴포넌트](https://ui.shadcn.com/)

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🙏 감사의 말

- [React Router](https://reactrouter.com/) 팀
- [Tailwind CSS](https://tailwindcss.com/) 팀
- [Shadcn UI](https://ui.shadcn.com/) 팀
- [Vite](https://vitejs.dev/) 팀

---

**WeMake** - 현대적인 웹 개발을 위한 최고의 보일러플레이트 🚀

Built with ❤️ using React Router v7, Tailwind CSS v4, and TypeScript.
