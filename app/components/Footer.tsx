'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Основная сетка футера */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Колонка 1: О компании */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <svg viewBox="0 0 100 100" className={`w-full h-full 'text-slate-900' : 'text-white'}`}>
                  <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M50 15 L55 45 L85 50 L55 55 L50 85 L45 55 L15 50 L45 45 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <circle cx="50" cy="50" r="4" fill="currentColor"/>
                </svg>
                <span className="font-bold text-xl text-white">
                  TerraTax<span className="text-yellow-500">.Agency</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Налоговый консалтинг и правовое сопровождение бизнеса. Двойной периметр защиты активов и репутации вашей компании.
              </p>
            </div>
  
            {/* Колонка 2: Навигация */}
            <div>
              <h4 className="text-white font-bold mb-4">Навигация</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#advantages" className="hover:text-yellow-500 transition-colors">Преимущества</a></li>
                <li><a href="#about" className="hover:text-yellow-500 transition-colors">О компании</a></li>
                <li><a href="#targetaudience" className="hover:text-yellow-500 transition-colors">Целевая аудитория</a></li>
                <li><a href="#tools" className="hover:text-yellow-500 transition-colors">Инструменты</a></li>
              </ul>
            </div>
  
            {/* Колонка 3: Контакты */}
            <div>
              <h4 className="text-white font-bold mb-4">Контакты</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="tel:+79130188382" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    +7 (913) 018-8383
                  </a>
                </li>
                <li>
                  <a href="mailto:info@terratax.ru" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    info@terratax.ru
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>Новосибирск, Большевистская улица, 132</span>
                </li>
              </ul>
            </div>
  
            {/* Колонка 4: Соцсети и Документы */}
            <div>
              <h4 className="text-white font-bold mb-4">Мы в мессенджерах</h4>
              <div className="flex gap-3 mb-8">
                <a href="https://t.me/+79130188382" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-[#0088cc] rounded-lg transition-colors text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.623 4.823-4.351c.192-.192-.054-.3-.297-.108L8.32 13.617l-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/></svg>
                </a>
                <a href="https://wa.me/79130188382" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-[#25D366] rounded-lg transition-colors text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
              
              <h4 className="text-white font-bold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-yellow-500 transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-yellow-500 transition-colors">Пользовательское соглашение</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-yellow-500 transition-colors">Реквизиты компании</a></li>
              </ul>
            </div>
          </div>
  
          {/* Нижняя полоса (Copyright) */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {currentYear} TerrаTax.Agency. Все права защищены.</p>
            <p className="text-slate-500">Разработано с фокусом на безопасность вашего бизнеса.</p>
          </div>
        </div>
      </footer>
    );
  }
