'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    position: '',
    message: '',
    privacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Функция для автоматического форматирования телефона
  const formatPhone = (value: string) => {
    // Оставляем только цифры
    let digits = value.replace(/\D/g, '');
    
    // Если начали вводить с 8, заменяем на 7
    if (digits.startsWith('8')) {
      digits = '7' + digits.slice(1);
    }
    // Если первая цифра не 7, добавляем её
    if (!digits.startsWith('7')) {
      digits = '7' + digits;
    }

    // Формируем красивую строку
    let formatted = '+7';
    if (digits.length > 1) formatted += ' (' + digits.substring(1, 4);
    if (digits.length >= 4) formatted += ') ' + digits.substring(4, 7);
    if (digits.length >= 7) formatted += '-' + digits.substring(7, 9);
    if (digits.length >= 9) formatted += '-' + digits.substring(9, 11);
    
    return formatted;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    let newValue = type === 'checkbox' ? checked : value;

    // Применяем маску только к полю телефона
    if (name === 'phone') {
      newValue = formatPhone(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Введите имя';
    
    // Проверка телефона (должно быть 18 символов: "+7 (XXX) XXX-XX-XX")
    if (formData.phone.length < 18) newErrors.phone = 'Введите полный номер телефона';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }
    if (!formData.message.trim()) newErrors.message = 'Введите сообщение';
    if (!formData.privacy) newErrors.privacy = 'Необходимо согласие на обработку данных';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Имитация отправки на сервер (2 секунды)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        firstName: '', lastName: '', phone: '', email: '',
        company: '', position: '', message: '', privacy: false
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
            Связаться
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-slate-900">
            Контакты
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Свяжитесь с нами удобным способом или оставьте заявку
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Левая колонка: Контакты */}
          <div>
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-50 text-yellow-600 rounded-xl flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Телефон</h3>
                  <a href="tel:+79130188382" className="text-lg text-yellow-600 hover:text-yellow-700 font-medium transition-colors">
                    +7 (913) 018-8382
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-50 text-yellow-600 rounded-xl flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                  <a href="mailto:terre_dima@mail.ru" className="text-lg text-yellow-600 hover:text-yellow-700 font-medium transition-colors">
                    terre_dima@mail.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-50 text-yellow-600 rounded-xl flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Адрес</h3>
                  <p className="text-lg text-slate-600">
                    Новосибирск, <br />Большевистская улица, 132
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="https://t.me/+79130188382" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#0088cc] hover:bg-[#0077b3] text-white font-medium rounded-xl transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.623 4.823-4.351c.192-.192-.054-.3-.297-.108L8.32 13.617l-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/></svg>
                Telegram
              </a>
              <a href="https://wa.me/79130188382" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-xl transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>

            <div className="w-full aspect-video bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200">
              <div className="text-center text-slate-400">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-sm font-medium">Интерактивная карта Яндекс/Google</p>
              </div>
            </div>
          </div>

          {/* Правая колонка: Форма */}
          <div className="bg-slate-50 p-8 lg:p-10 rounded-3xl border border-slate-100 shadow-sm">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Заявка отправлена!</h3>
                <p className="text-slate-600">Мы свяжемся с вами в течение 2 часов в рабочее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Имя *</label>
                    <input
                      type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white border rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors ${errors.firstName ? 'border-red-500' : 'border-slate-200'}`}
                      placeholder="Ваше имя"
                    />
                    {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Фамилия</label>
                    <input
                      type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                      placeholder="Ваша фамилия"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Телефон *</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white border rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors ${errors.phone ? 'border-red-500' : 'border-slate-200'}`}
                      placeholder="+7 (___) ___-__-__"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white border rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors ${errors.email ? 'border-red-500' : 'border-slate-200'}`}
                      placeholder="email@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Компания</label>
                    <input
                      type="text" name="company" value={formData.company} onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                      placeholder="Название компании"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Должность</label>
                    <input
                      type="text" name="position" value={formData.position} onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                      placeholder="Ваша должность"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Сообщение *</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} rows={4}
                    className={`w-full px-4 py-3 bg-white border rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-slate-200'}`}
                    placeholder="Опишите вашу задачу или вопрос"
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox" id="privacy" name="privacy" checked={formData.privacy} onChange={handleChange}
                    className="mt-1 w-4 h-4 text-yellow-600 border-slate-300 rounded focus:ring-yellow-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-600">
                    {/* ИСПРАВЛЕНИЕ 2: Добавлен onClick, чтобы страница не прыгала вверх */}
                    Я согласен с{' '}
                    <a 
                      href="/privacy" 
                      onClick={(e) => e.preventDefault()} 
                      className="text-yellow-600 hover:text-yellow-700 underline"
                    >
                      политикой конфиденциальности
                    </a>{' '}
                    и даю согласие на обработку персональных данных *
                  </label>
                </div>
                {errors.privacy && <p className="text-sm text-red-500 -mt-3">{errors.privacy}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-yellow-600 hover:bg-yellow-500 disabled:bg-yellow-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Отправить заявку
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-slate-500">
                  Отвечаем в течение 2 часов в рабочее время
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}