```tsx
import { useState } from "react";

const telegramUrl = "https://t.me/pulsar_host";
const emailUrl = "mailto:pulsathost@gmail.com";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="header">
        <div className="container header-inner">
          <a className="logo" href="#top" onClick={closeMenu}>
            PulSar Host
          </a>

          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            <a href="#features" onClick={closeMenu}>Преимущества</a>
            <a href="#locations" onClick={closeMenu}>Локации</a>
            <a href="#plans" onClick={closeMenu}>Тарифы</a>
            <a href="#contacts" onClick={closeMenu}>Контакты</a>

            <a
              className="button button-light mobile-button"
              href="#plans"
              onClick={closeMenu}
            >
              Выбрать тариф
            </a>
          </nav>

          <a className="button button-light desktop-button" href="#plans">
            Выбрать тариф
          </a>

          <button
            className={`menu-button ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">PULSAR HOST</div>

              <h1>
                Игровой хостинг
                <br />
                GTA SAMP / CRMP
              </h1>

              <p>
                Стабильный хостинг для игровых серверов GTA SAMP и CRMP.
                Мощное оборудование, защита инфраструктуры и удобное
                управление сервером.
              </p>

              <div className="hero-buttons">
                <a className="button button-light" href="#plans">
                  Заказать сервер
                </a>

                <a className="button button-outline" href="#features">
                  Подробнее
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>24/7</strong>
                  <span>Работа серверов</span>
                </div>

                <div>
                  <strong>SSD</strong>
                  <span>Быстрые диски</span>
                </div>

                <div>
                  <strong>Anti-DDoS</strong>
                  <span>Защита сети</span>
                </div>
              </div>
            </div>

            <div className="server-card">
              <div className="server-glow" />

              <div className="server-icon">⚡</div>

              <div className="server-title">PulSar Host</div>
              <div className="server-subtitle">GAME SERVER HOSTING</div>

              <div className="server-lines">
                <div>
                  <span>CPU</span>
                  <strong>Intel</strong>
                </div>

                <div>
                  <span>Storage</span>
                  <strong>SSD</strong>
                </div>

                <div>
                  <span>Network</span>
                  <strong>1 Gbps</strong>
                </div>
              </div>

              <div className="server-status">
                <i />
                Система работает
              </div>
            </div>
          </div>
        </section>

        <section className="section light" id="features">
          <div className="container">
            <div className="eyebrow">ВОЗМОЖНОСТИ</div>

            <h2>Преимущества PulSar Host</h2>

            <div className="features">
              <Feature icon="⚡" title="Мощные процессоры">
                Производительное оборудование для стабильной работы игровых
                серверов.
              </Feature>

              <Feature icon="🛡" title="Защита от DDoS">
                Защита серверной инфраструктуры от сетевых атак.
              </Feature>

              <Feature icon="💾" title="SSD-диски">
                Быстрые накопители для комфортной работы серверов.
              </Feature>

              <Feature icon="🗄" title="MySQL">
                Возможность использовать базы данных для вашего проекта.
              </Feature>

              <Feature icon="🔄" title="Резервные копии">
                Создавайте резервные копии важных данных сервера.
              </Feature>

              <Feature icon="🎮" title="GTA SAMP / CRMP">
                Хостинг подходит для игровых проектов GTA.
              </Feature>

              <Feature icon="⚙" title="Удобная панель">
                Управляйте сервером быстро и удобно.
              </Feature>

              <Feature icon="📁" title="FTP-доступ">
                Получайте доступ к файлам игрового сервера.
              </Feature>

              <Feature icon="🌍" title="Разные локации">
                Выбирайте подходящую серверную локацию.
              </Feature>
            </div>
          </div>
        </section>

        <section className="section locations" id="locations">
          <div className="container">
            <div className="eyebrow">СЕРВЕРНЫЕ ЛОКАЦИИ</div>

            <h2>Локации</h2>

            <div className="location-grid">
              <Location
                number="#1"
                title="Германия — Frankfurt"
                description="Anti-DDoS • стабильная сеть • низкая задержка"
              />

              <Location
                number="#2"
                title="Германия — Frankfurt"
                description="Альтернативная локация • Anti-DDoS"
              />
            </div>
          </div>
        </section>

        <section className="section light" id="plans">
          <div className="container">
            <div className="eyebrow">ТАРИФЫ</div>

            <h2>GTA SAMP / CRMP</h2>

            <div className="plans">
              <Plan
                name="Free"
                price="0.00 ₽"
                cpu="1 ядро"
                ram="756 МБ"
                ssd="2000 МБ"
              />

              <Plan
                name="Lite"
                price="1.00 ₽"
                cpu="1.5 ядра"
                ram="1024 МБ"
                ssd="7500 МБ"
              />

              <Plan
                name="Pro"
                price="2.00 ₽"
                cpu="2 ядра"
                ram="1536 МБ"
                ssd="15000 МБ"
                featured
              />
            </div>
          </div>
        </section>

        <section className="trust">
          <div className="container trust-inner">
            <div>
              <div className="eyebrow">PULSAR HOST</div>

              <h2>Надёжный хостинг для вашего проекта</h2>

              <p>
                Стабильная инфраструктура, удобное управление и поддержка
                игровых серверов GTA SAMP / CRMP.
              </p>
            </div>

            <div className="payment-list">
              <span>VISA</span>
              <span>MASTERCARD</span>
              <span>МИР</span>
              <span>СБП</span>
              <span>CRYPTO</span>
            </div>
          </div>
        </section>
      </main>

      <footer id="contacts">
        <div className="container footer-grid">
          <div>
            <a className="footer-logo" href="#top">
              PulSar Host
            </a>

            <p>
              Хостинг игровых серверов GTA SAMP и CRMP.
              <br />
              Стабильность. Скорость. PulSar Host.
            </p>
          </div>

          <div>
            <h3>Навигация</h3>

            <a href="#features">Преимущества</a>
            <a href="#locations">Локации</a>
            <a href="#plans">Тарифы</a>
            <a href="#contacts">Контакты</a>
          </div>

          <div>
            <h3>Контакты</h3>

            <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
              Telegram
            </a>

            <a href={emailUrl}>
              pulsathost@gmail.com
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 PulSar Host. Все права защищены.</span>
          <span>PulSar Host</span>
        </div>
      </footer>
    </div>
  );
}

function Feature({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="feature">
      <div className="feature-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{children}</p>
    </div>
  );
}

function Location({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="location-card">
      <span>{number}</span>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

function Plan({
  name,
  price,
  cpu,
  ram,
  ssd,
  featured = false,
}: {
  name: string;
  price: string;
  cpu: string;
  ram: string;
  ssd: string;
  featured?: boolean;
}) {
  return (
    <div className={`plan ${featured ? "featured" : ""}`}>
      {featured && <div className="popular">ПОПУЛЯРНЫЙ</div>}

      <div className="plan-name">{name}</div>

      <div className="plan-price">
        {price}
        <small>/ слот</small>
      </div>

      <div className="plan-spec">
        <span>CPU</span>
        <strong>{cpu}</strong>
      </div>

      <div className="plan-spec">
        <span>RAM</span>
        <strong>{ram}</strong>
      </div>

      <div className="plan-spec">
        <span>SSD</span>
        <strong>{ssd}</strong>
      </div>

      <a className="button button-dark" href="#contacts">
        Связаться
      </a>
    </div>
  );
}
```

