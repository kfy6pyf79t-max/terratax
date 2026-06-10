export default function Vision() {
    const cards = [
      {
        title: 'Помощь в решении задач любой сложности',
        desc: 'Комплексный подход к нестандартным ситуациям с налоговыми и правовыми рисками.',
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <circle cx="12" cy="12" r="6" strokeWidth="2" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        ),
      },
      {
        title: 'Гибкость + Минимизация рисков',
        desc: 'Уход от шаблонов. Каждое решение адаптировано под специфику вашего бизнеса.',
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
      },
      {
        title: 'Последовательное планирование решения кейсов',
        desc: 'Разработка успешной стратегии с четкими этапами, сроками и измеримыми результатами.',
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        title: 'Ориентация на результат',
        desc: 'Фокус на защите активов, оптимизации налоговой нагрузки и устойчивом росте.',
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
      },
    ];
  
    return (
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Заголовок секции */}
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
              Наша философия
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900">
              Видение и цели
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Мы не используем шаблонные решения. Каждый проект — это уникальная стратегия, 
              построенная на глубоком понимании вашего бизнеса.
            </p>
          </div>
  
          {/* Сетка карточек */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }