import { Button } from "~/common/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 헤더 섹션 */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">🚀 WeMake</h1>
          <p className="text-gray-600 mt-2">
            React Router v7 + Tailwind CSS v4 + TypeScript
          </p>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="container mx-auto px-4 py-12">
        {/* 히어로 섹션 */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            환영합니다! 👋
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            현대적인 웹 개발을 위한 최신 기술 스택으로 구축된 프로젝트입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              시작하기
            </Button>
            <Button variant="outline" size="lg">
              더 알아보기
            </Button>
          </div>
        </section>

        {/* 기술 스택 섹션 */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🛠️ 기술 스택
          </h3>
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-2xl mb-4">⚛️</div>
              <h4 className="text-lg font-semibold mb-2">React Router v7</h4>
              <p className="text-gray-600">
                최신 라우팅 시스템으로 SSR을 지원하는 현대적인 웹 애플리케이션
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-2xl mb-4">🎨</div>
              <h4 className="text-lg font-semibold mb-2">Tailwind CSS v4</h4>
              <p className="text-gray-600">
                유틸리티 우선 CSS 프레임워크로 빠르고 일관된 디자인
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-2xl mb-4">🔷</div>
              <h4 className="text-lg font-semibold mb-2">TypeScript</h4>
              <p className="text-gray-600">
                타입 안전성을 제공하는 JavaScript의 확장
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-2xl mb-4">🎯</div>
              <h4 className="text-lg font-semibold mb-2">Shadcn UI</h4>
              <p className="text-gray-600">재사용 가능한 컴포넌트 라이브러리</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-2xl mb-4">⚡</div>
              <h4 className="text-lg font-semibold mb-2">Vite</h4>
              <p className="text-gray-600">빠른 개발 서버와 빌드 도구</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-2xl mb-4">🔧</div>
              <h4 className="text-lg font-semibold mb-2">pnpm</h4>
              <p className="text-gray-600">빠르고 효율적인 패키지 매니저</p>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} WeMake. React Router v7 + Tailwind CSS
            v4로 구축되었습니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
