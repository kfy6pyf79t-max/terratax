export default function Process() {
    const steps = [
      {
        number: '1',
        title: 'Обращение',
        desc: 'Вы оставляете заявку в любом виде. Мы отвечаем для согласовании удобного времени для консультации.',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        ),
      },
      {
        number: '2',
        title: 'Диагностика',
        desc: 'Проводим первичный анализ: изучаем документы, выявляем риски и точки роста. Итог — честная оценка перспектив без скрытых условий.',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        ),
      },
      {
        number: '3',
        title: 'Стратегия',
        desc: 'Разрабатываем индивидуальный план действий: налоговая оптимизация, защита от рисков или сопровождение проверки. Согласуем с вами каждый шаг и фиксируем в договоре.',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
        ),
      },
      {
        number: '4',
        title: 'Реализация',
        desc: 'Внедряем решение под ключ. Вы получаете отчёты об изменении статуса задачи.',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        number: '5',
        title: 'Сопровождение',
        desc: 'Остаёмся на связи 24/7: отвечаем на вопросы, корректируем стратегию. Ваш бизнес под постоянной защитой экспертов.',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
      },
    ];
  
    return (
      <section id="process" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Заголовок секции */}
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
              Как мы работаем
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900">
              Понятный процесс от заявки до результата
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Вы всегда знаете, на каком этапе находится ваша задача. 
              Никаких слепых зон и скрытых условий.
            </p>
          </div>
  
          {/* Таймлайн */}
          <div className="relative">
            
            {/* Вертикальная линия (мобильная версия) */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-200 lg:hidden" />
            
            {/* Горизонтальная линия (десктоп) */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-yellow-200" />
  
            {/* Этапы */}
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative lg:text-center">
                  
                  {/* Номер/точка на линии */}
                  <div className="flex items-start gap-6 lg:flex-col lg:items-center lg:gap-4">
                    
                    {/* Кружок с номером */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 flex items-center justify-center bg-yellow-600 text-white rounded-full shadow-lg shadow-yellow-500/30 lg:mx-auto">
                        <span className="text-lg font-bold">{step.number}</span>
                      </div>
                    </div>
  
                    {/* Карточка этапа */}
                    <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-yellow-300 transition-all duration-300 lg:mt-4">
                      <div className="flex items-center gap-3 mb-3 lg:justify-center">
                        <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 text-yellow-700 rounded-lg">
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
  
                </div>
              ))}
            </div>
          </div>
  
          {/* CTA в конце блока */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-left">
                <p className="font-semibold text-slate-900">Готовы начать?</p>
                <p className="text-sm text-slate-600">Первая консультация — бесплатно</p>
              </div>
              <a
                href="#contact"
                className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Оставить заявку
              </a>
            </div>
          </div>
  
        </div>
      </section>
    );
  }