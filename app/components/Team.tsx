'use client';

export default function Team() {
  const principles = [
    {
      title: 'Мультифункциональная синергия',
      desc: 'Над вашей задачей работают одновременно юристы, налоговые консультанты и финансовые аналитики. Это позволяет исключить «слепые зоны» и обеспечить всестороннюю защиту.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Непрерывное развитие',
      desc: 'Команда регулярно проходит повышение квалификации и отслеживает изменения в законодательстве, разъяснениях ФНС и актуальной судебной практике в режиме реального времени.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
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