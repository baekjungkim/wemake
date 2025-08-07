# 외부 공식 문서 레퍼런스

## Supabase 공식 문서

### 핵심 문서 링크
- **공식 사이트**: https://supabase.com/docs
- **JavaScript 클라이언트**: https://supabase.com/docs/reference/javascript
- **인증 가이드**: https://supabase.com/docs/guides/auth
- **데이터베이스 가이드**: https://supabase.com/docs/guides/database
- **React 통합**: https://supabase.com/docs/guides/getting-started/tutorials/with-react

### 프로젝트 설정
- JavaScript 클라이언트 라이브러리 사용
- 인증, 데이터베이스, 실시간 기능 활용
- TypeScript 타입 자동 생성 지원
- React Router v7과 통합

## Drizzle ORM 공식 문서

### 핵심 문서 링크
- **공식 사이트**: https://orm.drizzle.team
- **시작 가이드**: https://orm.drizzle.team/docs/get-started-postgresql
- **스키마 정의**: https://orm.drizzle.team/docs/sql-schema-declaration
- **쿼리 가이드**: https://orm.drizzle.team/docs/rqb
- **마이그레이션**: https://orm.drizzle.team/docs/migrations

### 프로젝트 설정
- PostgreSQL 기반 TypeScript ORM
- 타입 안전 쿼리 빌더
- 자동 타입 추론 지원
- 스키마 기반 마이그레이션

## Tailwind CSS 공식 문서

### 핵심 문서 링크
- **공식 사이트**: https://tailwindcss.com/docs
- **설치 가이드**: https://tailwindcss.com/docs/installation
- **유틸리티 클래스**: https://tailwindcss.com/docs/utility-first
- **반응형 디자인**: https://tailwindcss.com/docs/responsive-design
- **다크 모드**: https://tailwindcss.com/docs/dark-mode
- **커스터마이징**: https://tailwindcss.com/docs/configuration

### 프로젝트 설정
- Tailwind v4 사용 중 (`@tailwindcss/vite`)
- `tw-animate-css` 애니메이션 라이브러리 통합
- Shadcn UI "new-york" 스타일과 통합
- CSS 변수 기반 테마 시스템
- 반응형 및 다크 모드 지원

## React Router v7 통합

### 라이브러리별 통합 포인트
- **Supabase**: loader/action에서 인증 확인 및 데이터 처리
- **Drizzle**: loader에서 데이터베이스 쿼리 실행
- **Tailwind**: 페이지별 반응형 스타일링 적용
- 모든 통합은 React Router v7 패턴 준수 (useLoaderData 사용 금지)