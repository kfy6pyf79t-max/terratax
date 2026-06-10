export default function Hero() {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
        {/* Декоративный фон */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)`
        }} />
  
        {/* Контент */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse" />
            <span className="text-sm text-white/90 font-medium">Налоговый консалтинг премиум-класса</span>
          </div>
  
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Двойной периметр —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              стратегия защиты
            </span>{' '}
            активов и репутации вашего бизнеса
          </h1>
  
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Оптимизация бизнес-процессов для защиты на внешнем и внутреннем контурах. 
            Экспертный подход с опытом работы в ФНС.
          </p>
  
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1">
              Обратиться
            </a>
            <a href="#services" className="px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
              Подробности
            </a>
          </div>
        </div>
      </section>
    );
  }