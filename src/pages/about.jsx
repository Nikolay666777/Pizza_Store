import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fbf9fa' }}>
      {/* Hero секция */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d98a54]/10 via-transparent to-[#d98a54]/5"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d98a54]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#d98a54]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1 border border-[#d98a54]/30 rounded-full text-sm text-[#d98a54] bg-[#d98a54]/10">
              🍕 История вкуса
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: '#1a1a1a' }}>
              О нас
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" style={{ color: '#4a4a4a' }}>
              Мы создаем пиццу с любовью с 2010 года. Каждый кусочек — это история вкуса и качества.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-6 py-2 bg-white border border-[#d98a54]/20 rounded-full text-sm" style={{ color: '#1a1a1a' }}>
                🏆 15 лет опыта
              </span>
              <span className="px-6 py-2 bg-white border border-[#d98a54]/20 rounded-full text-sm" style={{ color: '#1a1a1a' }}>
                🎯 100% натуральные ингредиенты
              </span>
              <span className="px-6 py-2 bg-white border border-[#d98a54]/20 rounded-full text-sm" style={{ color: '#1a1a1a' }}>
                🚀 Доставка 30 минут
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Наша история */}
      <section className="py-20 border-t border-[#d98a54]/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: '#d98a54' }}>Наша история</span>
              <h2 className="text-4xl font-bold mt-2 mb-6" style={{ color: '#1a1a1a' }}>
                От маленькой пекарни до любимой пиццерии
              </h2>
              <div className="space-y-4" style={{ color: '#4a4a4a' }}>
                <p className="leading-relaxed">
                  Все началось в 2010 году с маленькой пекарни на окраине города. Наш основатель, 
                  Александр Петров, вдохновлялся рецептами итальянских пиццайоло и мечтал создавать 
                  настоящую неаполитанскую пиццу в России.
                </p>
                <p className="leading-relaxed">
                  Сегодня PizzaStore — это сеть из 15 пиццерий и 200 сотрудников, которые каждый день 
                  дарят радость тысячам гостей. Мы остаемся верны традициям, но всегда открыты к новому.
                </p>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-3xl font-bold" style={{ color: '#d98a54' }}>50+</div>
                  <div className="text-sm" style={{ color: '#4a4a4a' }}>Видов пиццы</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: '#d98a54' }}>100к+</div>
                  <div className="text-sm" style={{ color: '#4a4a4a' }}>Довольных гостей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: '#d98a54' }}>4.9</div>
                  <div className="text-sm" style={{ color: '#4a4a4a' }}>Средний рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white p-2 shadow-xl">
                <div className="w-full h-full rounded-xl bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800')] bg-cover bg-center"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl px-6 py-4 shadow-2xl" style={{ backgroundColor: '#d98a54' }}>
                <div className="text-2xl font-bold text-white">❤️</div>
                <div className="text-sm text-white">Сделано с душой</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="py-20" style={{ backgroundColor: '#f5f0ed' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: '#d98a54' }}>Ценности</span>
            <h2 className="text-4xl font-bold mt-2 mb-4" style={{ color: '#1a1a1a' }}>Почему выбирают нас</h2>
            <p style={{ color: '#4a4a4a' }}>Мы верим, что настоящая пицца — это искусство, доступное каждому</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 transition-colors" style={{ backgroundColor: '#d98a54/20' }}>
                🍅
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>Только натуральное</h3>
              <p className="leading-relaxed" style={{ color: '#4a4a4a' }}>
                Мы используем только свежие продукты: итальянская мука, домашние соусы и лучшие сыры.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 transition-colors" style={{ backgroundColor: '#d98a54/20' }}>
                👨‍🍳
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>Шеф-повара из Италии</h3>
              <p className="leading-relaxed" style={{ color: '#4a4a4a' }}>
                Наши пиццайоло проходили обучение в Неаполе и знают все секреты идеального теста.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 transition-colors" style={{ backgroundColor: '#d98a54/20' }}>
                🚀
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>Быстрая доставка</h3>
              <p className="leading-relaxed" style={{ color: '#4a4a4a' }}>
                Доставляем пиццу горячей в течение 30 минут или вернем деньги за заказ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: '#d98a54' }}>Команда</span>
            <h2 className="text-4xl font-bold mt-2 mb-4" style={{ color: '#1a1a1a' }}>Наши пицца-герои</h2>
            <p style={{ color: '#4a4a4a' }}>Знакомьтесь с людьми, которые создают вашу любимую пиццу</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Александр Петров',
                role: 'Основатель и Шеф-повар',
                image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop',
                experience: '25 лет опыта'
              },
              {
                name: 'Мария Иванова',
                role: 'Главный технолог',
                image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop',
                experience: '15 лет опыта'
              },
              {
                name: 'Дмитрий Соколов',
                role: 'Операционный директор',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
                experience: '20 лет опыта'
              }
            ].map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p style={{ color: '#d98a54' }} className="text-sm font-semibold">{member.role}</p>
                    <p className="text-gray-300 text-xs mt-1">{member.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс */}
      <section className="py-20" style={{ backgroundColor: '#f5f0ed' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: '#d98a54' }}>Процесс</span>
              <h2 className="text-4xl font-bold mt-2" style={{ color: '#1a1a1a' }}>Как мы создаем пиццу</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: '01', label: 'Замес теста', icon: '👐', desc: '24 часа ферментации' },
                { step: '02', label: 'Формовка', icon: '🫓', desc: 'Ручная растяжка' },
                { step: '03', label: 'Топпинг', icon: '🧀', desc: 'Лучшие ингредиенты' },
                { step: '04', label: 'Выпечка', icon: '🔥', desc: 'Печь на дровах' },
              ].map((item, index) => (
                <div key={index} className="text-center group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative mb-3">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto transition-colors" style={{ backgroundColor: '#d98a54/20' }}>
                      {item.icon}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-[10%] w-[20%] h-0.5" style={{ backgroundColor: '#d98a54/30' }}></div>
                    )}
                  </div>
                  <div className="text-sm font-bold" style={{ color: '#d98a54' }}>{item.step}</div>
                  <div className="font-semibold" style={{ color: '#1a1a1a' }}>{item.label}</div>
                  <div className="text-xs" style={{ color: '#4a4a4a' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: '#d98a54' }}>Отзывы</span>
            <h2 className="text-4xl font-bold mt-2 mb-4" style={{ color: '#1a1a1a' }}>Что говорят наши гости</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Елена Смирнова',
                text: 'Лучшая пицца в городе! Тесто нежное, начинки щедрые. Доставка всегда вовремя. Заказываю только здесь!',
                rating: 5,
                date: '2 дня назад'
              },
              {
                name: 'Игорь Морозов',
                text: 'Попробовал все пиццерии, но PizzaStore — это уровень! Особенно рекомендую Маргариту с трюфельным маслом.',
                rating: 5,
                date: '5 дней назад'
              },
              {
                name: 'Анна Ковальчук',
                text: 'Заказывала пиццу на день рождения. Все гости были в восторге! Огромное спасибо вашей команде!',
                rating: 5,
                date: '1 неделя назад'
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex text-[#d98a54] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="leading-relaxed mb-4" style={{ color: '#4a4a4a' }}>"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold" style={{ color: '#1a1a1a' }}>{review.name}</div>
                    <div className="text-sm" style={{ color: '#4a4a4a' }}>{review.date}</div>
                  </div>
                  <div style={{ color: '#d98a54' }}>❤️</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20" style={{ backgroundColor: '#d98a54' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Готовы попробовать нашу пиццу?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Закажите сегодня и получите скидку 20% на первый заказ
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/menu" 
              className="bg-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ color: '#d98a54' }}
            >
              Смотреть меню
            </Link>
            <Link 
              to="/contacts" 
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;