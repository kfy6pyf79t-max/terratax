'use client';

import { useState } from 'react';

const roadmapSteps = [
  {
    title: 'Входная диагностика',
    description: 'Анализ текущей структуры бизнеса, выявление зон риска и точек роста.',
    details: 'Проводим глубинное интервью с руководством, изучаем учредительные документы, налоговую отчетность и договорную базу.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Оценка финансового здоровья',
    description: 'Комплексный аудит финансовых потоков и налоговой нагрузки.',
    details: 'Анализируем финансовые показатели, сопоставляем с отраслевыми маркерами, выявляем скрытые резервы.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Разработка плана оптимизации',
    description: 'Формирование индивидуальной стратегии с учетом специфики бизнеса.',
    details: 'Создаем график выполнения с четкими этапами, сроками и ответственными. Прогнозируем экономический эффект.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Проектирование и планирование внедрения',
    description: 'Подготовка к реализации плана без остановки бизнес-процессов.',
    details: 'Разрабатываем регламенты, инструкции и шаблоны документов. Проводим обучение команды.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Запуск и мониторинг',
    description: 'Реализация программы с постоянным контролем ключевых метрик.',
    details: 'Регулярные отчеты, корректировка плана при изменении условий, оперативное реагирование на риски.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Сопровождение и оценка результатов',
    description: 'Долгосрочное партнерство для устойчивой защиты и развития бизнеса.',
    details: 'Квартальные аудиты, обновление стратегии, консультирование по новым законодательным изменениям.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function ServicesRoadmap() {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
            Наш подход
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900">
            Дорожная карта мероприятий
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Пошаговая стратегия от диагностики до долгосрочного сопровождения
          </p>
        </div>

        {/* Таймлайн */}
        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-500 transform lg:-translate-x-0.5" />

          {roadmapSteps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-start mb-12 lg:mb-16 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Точка на линии */}
              <div className="absolute left-6 lg:left-1/2 w-4 h-4 bg-yellow-500 rounded-full transform -translate-x-1.5 lg:-translate-x-2 z-10 ring-4 ring-slate-50" />

              {/* Контент */}
              <div className={`ml-16 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                <div
                  className={`p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-100 ${
                    activeStep === index ? 'ring-2 ring-yellow-500 border-yellow-500' : ''
                  }`}
                  onClick={() => setActiveStep(activeStep === index ? null : index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl text-white">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-yellow-600 font-semibold mb-1">Этап {index + 1}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 mb-2">{step.description}</p>
                      
                      {/* Раскрывающийся блок */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          activeStep === index ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-slate-500 pt-3 border-t border-slate-100 text-sm leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Пустой блок для симметрии на десктопе */}
              <div className="hidden lg:block lg:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}