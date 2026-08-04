'use client';

import { useState } from 'react';

const tools = [
  {
    id: 'screening',
    title: 'Скрининг',
    description: 'Быстрая экспресс-оценка состояния бизнеса и выявление ключевых налоговых и юридических рисков. Занимает от 1 до 3 рабочих дней. Идеален для первичного знакомства и принятия решения о глубоком аудите',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    id: 'perimeter',
    title: '«Двойной периметр» - 2P',
    description: 'Наша флагманская методика. Комплексная диагностика внешнего (контрагенты, рынок, госорганы) и внутреннего (документооборот, кадры, активы) контуров защиты бизнеса',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'marker',
    title: '«Маркер конкурента/контрагента»',
    description: 'Оригинальная система скоринга надежности оппонентов/партнеров. Оценка по 25+ параметрам, включая аффилированность, налоговую нагрузку и судебную историю, для минимизации рисков по сделкам',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    id: 'optimization',
    title: 'Оптимизация налоговой нагрузки',
    description: 'Разработка легальных и безопасных проектов оптимизации обязательных платежей. Полное соответствие законодательству, отсутствие признаков дробления бизнеса или необоснованной налоговой выгоды',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: 'audit',
    title: 'Аудит с погружением',
    description: 'Глубокий, детальный анализ финансовой и налоговой документации за последние 3 года с целью выявления "слепых" рисковых зон и разработки пошагового плана мероприятий до предъявления претензий',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
];

export default function Tools() {
  const [activeTool, setActiveTool] = useState(tools[0]);

  return (
    <section id="tools" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
            Предложения
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900">
            Инструменты и методики
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Собственные продукты, разработанные на основе многолетней практики и десятков успешных кейсов
          </p>
        </div>

        {/* Сетка: Список слева, Описание справа */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Левая колонка: Список инструментов */}
          <div className="space-y-3">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                  activeTool.id === tool.id
                    ? 'bg-white border-yellow-500 shadow-md'
                    : 'bg-transparent border-slate-200 hover:border-yellow-300 hover:bg-white/50'
                }`}
              >
                <div className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                  activeTool.id === tool.id
                    ? 'bg-yellow-500 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}>
                  {tool.icon}
                </div>
                <span className={`font-bold text-lg ${
                  activeTool.id === tool.id ? 'text-slate-900' : 'text-slate-600'
                }`}>
                  {tool.title}
                </span>
              </button>
            ))}
          </div>

          {/* Правая колонка: Детальное описание */}
          <div className="flex items-center">
            <div className="w-full p-8 lg:p-10 bg-white rounded-2xl border border-slate-100 shadow-lg">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 text-yellow-700 rounded-2xl mb-6">
                {activeTool.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {activeTool.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {activeTool.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg"
              >
                Заказать внедрение
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}