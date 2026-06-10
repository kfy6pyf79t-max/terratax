export default function Trust() {
    const metrics = [
      {
        value: '50+',
        label: 'Успешных кейсов для ЮЛ',
        description: 'Налоговое сопровождение и защита компаний на ОСНО и УСН при проведении мероприятий налогового контроля.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        value: '84%',
        label: 'Новых клиентов приходят по личной рекомендации',
        description: 'Высокий уровень NPS. Готовность повторно обращаться и рекомендовать компанию.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        value: '100%',
        label: 'Конфиденциальность и NDA',
        description: 'Строгие внутренние протоколы защиты информации, использование защищенных каналов связи и подписание NDA.',
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        ),
      },
    ];
  
    return (
      <section className="py-20 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Заголовок секции */}
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              Результаты
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white">
              Доверие, подтвержденное цифрами
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Мы не обещаем невозможного. Мы показываем реальные, измеримые результаты нашей работы для бизнеса.
            </p>
          </div>
  
          {/* Сетка метрик: ровно 3 колонки для идеального баланса */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="group relative p-8 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2 text-center"
              >
                {/* Иконка */}
                <div className="w-16 h-16 flex items-center justify-center bg-yellow-500/10 text-yellow-500 rounded-2xl mx-auto mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                  {metric.icon}
                </div>
                
                {/* Цифра */}
                <div className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {metric.value}
                </div>
                
                {/* Заголовок метрики */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {metric.label}
                </h3>
                
                {/* Описание */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }