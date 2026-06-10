'use client';

export default function Team() {
  const principles = [
    {
      title: 'Мультифункциональная синергия',
      desc: 'Над вашей задачей работают одновременно юристы, налоговые консультанты и финансовые аналитики. Это позволяет исключить «слепые зоны» и обеспечить всестороннюю защиту.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Непрерывное развитие',
      desc: 'Команда регулярно проходит повышение квалификации и отслеживает изменения в законодательстве, разъяснениях ФНС и актуальной судебной практике в режиме реального времени.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Абсолютная конфиденциальность',
      desc: 'Строгие внутренние протоколы защиты информации, использование защищенных каналов связи и подписание NDA перед началом любого взаимодействия с клиентом.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="team" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
            Наша экспертиза
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900">
            Сила нашего коллектива
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Мы формируем не команду отдельных исполнителей, а единый слаженный механизм. 
            Вы получаете доступ к совокупному опыту лучших специалистов отрасли.
          </p>
        </div>

        {/* Блок с агрегированными показателями (доверие через цифры) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-slate-900 text-white p-8 rounded-2xl text-center">
            <div className="text-4xl lg:text-5xl font-bold text-yellow-500 mb-2">50+</div>
            <div className="text-slate-300 font-medium">Лет совокупного опыта команды</div>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-2xl text-center">
            <div className="text-4xl lg:text-5xl font-bold text-yellow-500 mb-2">100%</div>
            <div className="text-slate-300 font-medium">Соблюдение сроков и конфиденциальности</div>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-2xl text-center">
            <div className="text-4xl lg:text-5xl font-bold text-yellow-500 mb-2">24/7</div>
            <div className="text-slate-300 font-medium">Поддержка в критических ситуациях</div>
          </div>
        </div>

        {/* Принципы работы команды */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {principles.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 text-yellow-700 rounded-2xl mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Призыв к действию */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6 text-lg">
            Расскажите о вашей задаче, и мы подключим к её решению именно тех экспертов, чья компетенция необходима.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Обсудить задачу с командой
          </a>
        </div>

      </div>
    </section>
  );
}