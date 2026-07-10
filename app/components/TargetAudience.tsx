'use client';

import { useState } from 'react';

const audienceSegments = [
  {
    id: 'org',
    title: 'Организации',
    subtitle: 'ОСНО, УСН',
    description: 'Комплексное налоговое сопровождение для юридических лиц. Оптимизация нагрузки, защита при проверках, структурирование сделок и оценка налоговых рисков.',
    features: ['Аудит текущей налоговой нагрузки', 'Структурирование сделок и договоров', 'Защита при выездных и камеральных проверках'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 'ip',
    title: 'Индивидуальные предприниматели',
    subtitle: 'УСН, ПСН, ЕСХН, НПД',
    description: 'Персональная стратегия для ИП. Помощь в выборе оптимальной системы налогообложения, минимизация рисков блокировки счетов и легальное снижение платежей.',
    features: ['Подбор оптимальной системы налогообложения', 'Оптимизация отчетности и документооборота', 'Защита от необоснованных блокировок счетов', 'Сопровождение при масштабировании бизнеса'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: 'fiz',
    title: 'Физические лица',
    subtitle: 'НПД, НДФЛ, консультации',
    description: 'Консультации по налогообложению доходов, оптимизация налоговых вычетов, защита прав налогоплательщиков и сопровождение при продаже имущества.',
    features: ['Помощь в получении налоговых вычетов', 'Консультации по декларированию доходов (НДФЛ)', 'Оптимизация налогов при продаже имущества', 'Сопровождение при получении наследства или дарении'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function TargetAudience() {
  const [activeSegment, setActiveSegment] = useState('org');
  const current = audienceSegments.find(s => s.id === activeSegment) || audienceSegments[0];

  return (
    <section id="clients" className="py-20 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
            Для кого
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900">
            Наши клиенты
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Индивидуальные решения для каждого сегмента бизнеса
          </p>
        </div>

        {/* Переключатели (Табы) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {audienceSegments.map((segment) => (
            <button
              key={segment.id}
              onClick={() => setActiveSegment(segment.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeSegment === segment.id
                  ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-500/30'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {segment.icon}
              <span>{segment.title}</span>
            </button>
          ))}
        </div>

        {/* Контент активной вкладки */}
        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-sm transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            {/* Левая часть: Описание */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 text-yellow-700 rounded-xl">
                  {current.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{current.title}</h3>
                  <p className="text-yellow-600 font-semibold">{current.subtitle}</p>
                </div>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {current.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Задать вопрос
              </a>
            </div>

            {/* Правая часть: Список возможностей */}
            <div className="flex-1">
              <h4 className="text-lg font-bold text-slate-900 mb-4">Проекты:</h4>
              <ul className="space-y-4">
                {current.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-yellow-500 rounded-full mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}