# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 필수 개발 명령어

```bash
pnpm dev        # 개발 서버 시작 (http://localhost:5173)
pnpm build      # 프로덕션 빌드 생성
pnpm start      # 프로덕션 서버 실행
pnpm typecheck  # TypeScript 타입 검사 + React Router 타입 생성
```

## 핵심 아키텍처

**React Router v7 SSR 애플리케이션** - 기능 중심의 모듈화된 구조

### 라우팅 시스템

- `app/routes.ts`에서 라우트 정의 (React Router v7 구성)
- 타입 자동 생성: `react-router typegen` 실행 시 `.react-router/types/` 생성
- 경로 별칭: `~/` = `./app/` (tsconfig.json에서 설정)

### 모듈 구조 원칙

```
app/
├── common/          # 애플리케이션 전역 공유 코드
│   ├── components/  # 도메인 무관 재사용 컴포넌트
│   └── ui/         # Shadcn UI 기반 디자인 시스템
├── features/       # 도메인별 기능 모듈
│   └── [domain]/   # 각 도메인은 독립된 구조:
│       ├── components/  # 도메인 전용 컴포넌트
│       ├── pages/      # 페이지 레벨 컴포넌트
│       ├── queries/    # 데이터 레이어
│       └── schemas/    # 타입/검증 스키마
└── lib/            # 순수 유틸리티 함수
```

## 코딩 규칙 (.cursorrules 완전 적용)

### 기술 전문성

TypeScript, Node.js, React Router, React, Remix, Shadcn UI, Radix UI, Tailwind, Supabase, Drizzle ORM 전문가 수준으로 작업

## 📚 공식 문서 활용

### Context7 MCP 서버 사용 (권장)

```bash
# 예시: Supabase 공식 문서에서 패턴 검색
/implement "Supabase authentication setup" --c7

# 예시: Drizzle 공식 문서에서 스키마 패턴 검색
/build "Drizzle PostgreSQL schema migration" --context7

# 예시: Tailwind 공식 문서에서 스타일링 패턴 검색
/implement "Tailwind responsive grid layout" --c7

# Context7는 자동으로 관련 공식 문서를 검색하여 최신 패턴 제공
```

### 주요 외부 라이브러리 문서

- **Supabase**: https://supabase.com/docs - 인증, 데이터베이스, 실시간 기능
- **Drizzle ORM**: https://orm.drizzle.team - TypeScript ORM, 마이그레이션
- **Tailwind CSS**: https://tailwindcss.com/docs - 유틸리티 우선 CSS 프레임워크
- **프로젝트별 설정 및 통합 가이드**: `docs/EXTERNAL-DOCS.md` 참조

### 핵심 개발 원칙

- **정확한 예시와 함께 간결하고 기술적인 TypeScript 코드 작성**
- **함수형 및 선언적 프로그래밍 패턴 사용, 클래스 피하기**
- **코드 중복보다는 반복과 모듈화 선호**
- **보조 동사와 함께 설명적인 변수명 사용** (예: `isLoading`, `hasError`)
- **파일 구조 순서: 내보낸 컴포넌트 → 하위 컴포넌트 → 헬퍼 → 정적 콘텐츠 → 타입**

### 명명 규칙

- **디렉토리명**: 소문자와 대시 사용 (예: `components/auth-wizard`)
- **컴포넌트**: `named export` 선호

### TypeScript 사용법

- **모든 코드에 TypeScript 사용**
- **`type`보다는 `interface` 선호**
- **`enum` 피하고 `map` 사용**
- **TypeScript 인터페이스와 함께 함수형 컴포넌트 사용**

### 구문 및 포맷팅

- **순수 함수에는 `"function"` 키워드 사용**
- **조건문에서 불필요한 중괄호 피하고, 간단한 문장에는 간결한 구문 사용**
- **선언적 JSX 사용**

### UI 및 스타일링

- **컴포넌트와 스타일링에는 Shadcn UI, Radix, Tailwind 사용**
- **Tailwind CSS** (메인 스타일링)
- **Shadcn UI** "new-york" 스타일 (컴포넌트)
- **tw-animate-css** (애니메이션)
- **CSS 변수 테마 시스템 활성화**

### 🚨 중요한 규칙 (필수 준수)

#### Import 규칙

```typescript
// ✅ 올바른 방식
import { Button } from "~/common/components/ui"; // Shadcn UI만 사용
import { useNavigate } from "react-router"; // react-router만 사용
import type { Route } from "./+types/home"; // 타입 import 방식

// ❌ 절대 금지
import { Button } from "@radix-ui/react-button"; // Radix UI 직접 import 금지
import { useNavigate } from "@remix-run/react"; // Remix import 금지
```

#### React Router v7 패턴 (🔥 매우 중요!)

```typescript
// 🔥 필수: 새 페이지 생성 시 항상 이 3개 함수 export
export function loader({ request }: Route.LoaderArgs) {
  return { data: "example" }; // json() 사용 금지! 객체 직접 반환
}

export function action({ request }: Route.ActionArgs) {
  return { success: true }; // 일반 객체 반환
}

export function meta({ data }: Route.MetaFunction) {
  return [{ title: "페이지 제목" }]; // MetaFunction 타입 반환
}

// 🔥 페이지 컴포넌트: Props로 데이터 받기
export default function HomePage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  // ❌ 절대 사용 금지: useLoaderData(), useActionData()
  return <div>{loaderData.data}</div>;
}

// 상태 코드와 함께 응답 반환 시
export function loader() {
  return {
    data: { message: "success" }, // data 속성 사용
    status: 200,
  };
}
```

#### Route 타입 Import

```typescript
// 🔥 필수 방식
import type { Route } from "./+types/[파일명]";

// 각 함수의 타입 파라미터:
// - loader: Route.LoaderArgs
// - action: Route.ActionArgs
// - meta: Route.MetaFunction
// - 컴포넌트: Route.ComponentProps
```
