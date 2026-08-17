export default function Founder() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Центрированный контент */}
        <div className="text-center mb-12">
          {/* Декоративная иконка вместо фото */}
          <div className="w-20 h-20 mx-auto mb-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center shadow-sm">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>

          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
            Основатель
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900">
            Терре Дмитрий Васильевич
          </h2>
          <p className="mt-2 text-xl text-yellow-600 font-medium">
            Эксперт в области налоговой безопасности
          </p>
        </div>

        {/* Единый информативный блок */}
        <div className="bg-slate-50 p-8 lg:p-10 rounded-2xl border border-slate-200 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 text-yellow-700 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Ключевая экспертиза</h3>
          </div>
          
          <ul className="space-y-5 text-left">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></span>
              <span className="text-slate-700 leading-relaxed text-lg">
                <strong className="text-slate-900">Уникальный практический опыт в частном секторе:</strong> успешное решение сложных кейсов благодаря мультисценарному подходу
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></span>
              <span className="text-slate-700 leading-relaxed text-lg">
                <strong className="text-slate-900">Более 10 лет работы в ФНС:</strong> незаурядные практическе знания и навыки в сфере налогового контроля в результате проведения нестандартных и нишевых налоговых проверок
              </span>
            </li>
          </ul>
        </div>

        {/* Кнопка */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Обратиться лично
          </a>
        </div>

      </div>
    </section>
  );
}