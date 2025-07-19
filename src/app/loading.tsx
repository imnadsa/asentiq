import React from 'react'

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        
        {/* Логотип с анимацией */}
        <div className="relative">
          <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center animate-pulse">
            <span className="text-white font-styrene-a font-bold text-2xl">A</span>
          </div>
          
          {/* Кольцо загрузки */}
          <div className="absolute inset-0 border-4 border-accent-200 rounded-2xl animate-spin">
            <div className="absolute top-0 left-0 w-2 h-2 bg-accent-500 rounded-full"></div>
          </div>
        </div>

        {/* Текст */}
        <div className="text-center space-y-2">
          <h2 className="text-lg font-styrene-a font-semibold text-text-primary">
            Asentic
          </h2>
          <p className="text-text-secondary font-styrene-b">
            Подождите немного...
          </p>
        </div>

        {/* Прогресс бар */}
        <div className="w-64 h-1 bg-cream-dark rounded-full overflow-hidden">
          <div className="h-full bg-accent-500 rounded-full animate-pulse" style={{
            animation: 'loadingProgress 2s ease-in-out infinite'
          }} />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes loadingProgress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}

export default Loading
