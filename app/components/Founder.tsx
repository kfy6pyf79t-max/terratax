import Image from 'next/image';

export default function Founder() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Левая часть: Фото основателя */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/founder.jpg" 
                alt="Терре Дмитрий Васильевич — основатель TerraTax.Agency"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Декоративный элемент сзади */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Правая часть: Информация */}
          <div>
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
              Основатель
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900">
              Терре Дмитрий Васильевич
            </h2>
            <p className="mt-2 text-xl text-yellow-600 font-medium mb-8">
              Эксперт в области налоговой безопасности
            </p>

            {/* Единый информативный блок */}
            <div className="bg-slate-50 p-6 lg:p-8 rounded-2xl border border-slate-200 mb-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 text-yellow-700 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Ключевая экспертиза</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></span>
                  <span className="text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">Уникальный практический опыт в частном секторе:</strong> успешное решение сложных кейсов благодаря мультисценарному подходу
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></span>
                  <span className="text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">Более 10 лет работы в ФНС:</strong> личное проведение нестандартных и нишевых налоговых проверок, незаурядные практическе знания и навыки в сфере налогового контроля
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Обратиться лично
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}