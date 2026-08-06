export default function Hero() {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Фоновое изображение через тег img */}
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />

        {/* Затемнение с «просветом» в правом нижнем углу для картуши */}
        <div
         className="absolute inset-0"
         style={{
          background: 'radial-gradient(circle at 85% 15%, rgba(15, 23, 42, 0.95) 0%, transparent 60%), radial-gradient(circle at 85% 85%, transparent 0%, rgba(15, 23, 42, 0.6) 20%, rgba(15, 23, 42, 0.95) 55%)'
        }}
       />

        {/* Контент */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse" />
            <span className="text-sm text-white/90 font-medium">Налоговый консалтинг экстра-класса</span>
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
            Экспертный подход с практическими знаниями работы ФНС.
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