import { useState, useEffect } from 'react'
import { useReveal } from './hooks/useReveal'
import './App.css'

const CTA_URL = '#aplicar'

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

function App() {
  const revealRef = useReveal(0.1)
  const [stickyVisible, setStickyVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={revealRef}>
      <div className="grain" />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__slash" />
        <div className="container">
          <div className="hero__tagline">
            Vende &middot; Cierra &middot; Monetiza
          </div>

          <h1 className="hero__title">
            4 d&iacute;as que van<br />
            a cambiar tu <span>nivel</span>
          </h1>

          <p className="hero__subtitle">
            Formaci&oacute;n intensiva en una villa privada en Busot, Alicante.
            No vienes a escuchar. Vienes a entrenar la habilidad que
            convierte conversaciones en ingresos reales.
          </p>

          <div className="hero__cta-row">
            <a href={CTA_URL} className="btn btn--primary">
              Quiero aplicar
              <span className="btn__arrow">&rarr;</span>
            </a>
            <a href="#que-es" className="btn btn--outline">
              Saber m&aacute;s
            </a>
          </div>

          <div className="hero__meta">
            <div className="hero__meta-item">
              <span className="hero__meta-value">23-26</span>
              <span className="hero__meta-label">Febrero 2026</span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-value">30</span>
              <span className="hero__meta-label">Plazas m&aacute;x.</span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-value">100%</span>
              <span className="hero__meta-label">Pr&aacute;ctico</span>
            </div>
          </div>
        </div>

        <div className="hero__scroll-indicator">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ===== POSTER — GLADIATOR VISUAL ===== */}
      <section className="poster">
        <img
          src="/img/hero-poster.png"
          alt="Bootcamp de Resultados"
          className="poster__img"
        />
        <div className="poster__overlay" />
        <div className="poster__content">
          <div className="container">
            <p className="poster__text reveal">
              <span>Espa&ntilde;a</span> &middot; 23-26 Febrero 2026
            </p>
          </div>
        </div>
      </section>

      {/* ===== OPENING STATEMENT ===== */}
      <section className="statement" id="que-es">
        <div className="container">
          <p className="statement__text reveal">
            La mayor&iacute;a seguir&aacute; exactamente<br />
            igual dentro de <span>12 meses.</span>
          </p>
          <p className="statement__sub reveal reveal-delay-2">
            Mismo trabajo. Mismos ingresos. Mismas excusas. Mismos sue&ntilde;os pendientes.
          </p>
        </div>
      </section>

      {/* ===== PAIN POINTS ===== */}
      <section className="pain">
        <div className="container">
          <div className="pain__grid">
            <div className="pain__left">
              <p className="eyebrow reveal">La verdad inc&oacute;moda</p>
              <h2 className="pain__heading reveal reveal-delay-1">
                No es que no tengas <span>capacidad.</span><br />
                Es que nadie te ha ense&ntilde;ado a generar ingresos <span>con m&eacute;todo.</span>
              </h2>
              <p className="pain__desc reveal reveal-delay-2">
                Sin esa habilidad, tu vida depende de factores que no controlas.
                Y eso no cambia con motivaci&oacute;n. No cambia leyendo libros.
                No cambia viendo v&iacute;deos.
              </p>
            </div>

            <ul className="pain__list stagger-children">
              <li className="pain__list-item reveal">
                <span className="pain__list-icon">&times;</span>
                <span className="pain__list-text">
                  Dependes de terceros para generar ingresos. Tu econom&iacute;a est&aacute; en manos de otros.
                </span>
              </li>
              <li className="pain__list-item reveal">
                <span className="pain__list-icon">&times;</span>
                <span className="pain__list-text">
                  Dependes del mercado y del momento. Cuando las cosas cambian, t&uacute; sufres las consecuencias.
                </span>
              </li>
              <li className="pain__list-item reveal">
                <span className="pain__list-icon">&times;</span>
                <span className="pain__list-text">
                  Tu vida puede estar &ldquo;bien&rdquo;, pero sabes que no est&aacute; al nivel que deseas.
                </span>
              </li>
              <li className="pain__list-item reveal">
                <span className="pain__list-icon">&times;</span>
                <span className="pain__list-text">
                  No tienes el margen econ&oacute;mico que te dar&iacute;a tranquilidad. Ni el tiempo que imaginabas.
                </span>
              </li>
              <li className="pain__list-item reveal">
                <span className="pain__list-icon">&times;</span>
                <span className="pain__list-text">
                  No tienes el entorno que te impulse hacia arriba. Sabes que podr&iacute;as estar en otro lugar.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== KEY STATEMENT ===== */}
      <section className="statement">
        <div className="container">
          <p className="statement__text reveal">
            La libertad financiera empieza<br />
            cuando sabes <span>c&oacute;mo generar dinero.</span>
          </p>
          <p className="statement__sub reveal reveal-delay-2">
            Y eso es entrenable. Aqu&iacute; se entrena.
          </p>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="solution">
        <div className="container">
          <div className="solution__header">
            <p className="eyebrow reveal">Durante 4 d&iacute;as</p>
            <h2 className="solution__title reveal reveal-delay-1">
              Esto no es un evento para escuchar.<br />
              Es un evento para <span>hacer.</span>
            </h2>
          </div>

          <div className="solution__grid stagger-children">
            <div className="solution__card reveal">
              <span className="solution__card-number">01</span>
              <h3 className="solution__card-title">Llamadas Reales</h3>
              <p className="solution__card-text">
                Har&aacute;s llamadas reales a tus propios contactos.
                Nada de simulaciones. Pr&aacute;ctica con situaciones
                y objeciones reales desde el primer d&iacute;a.
              </p>
            </div>

            <div className="solution__card reveal">
              <span className="solution__card-number">02</span>
              <h3 className="solution__card-title">Estructura de Venta</h3>
              <p className="solution__card-text">
                Aprender&aacute;s a estructurar conversaciones de venta
                que convierten. Un m&eacute;todo probado para transformar
                conversaciones en ingresos reales.
              </p>
            </div>

            <div className="solution__card reveal">
              <span className="solution__card-number">03</span>
              <h3 className="solution__card-title">Acompa&ntilde;amiento Directo</h3>
              <p className="solution__card-text">
                Mentor&iacute;a directa y din&aacute;micas en vivo hasta que lo
                hagas con seguridad. No sales con teor&iacute;a.
                Sales con capacidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE / VILLA ===== */}
      <section className="experience">
        <div className="container">
          <div className="experience__grid">
            <div className="experience__visual reveal">
              <img
                src="/img/profile.png"
                alt="Bootcamp de Resultados — España 2026"
                className="experience__visual-img"
              />
              <div className="experience__visual-overlay" />
              <div className="experience__visual-badge">4 D&iacute;as Inmersi&oacute;n</div>
            </div>

            <div className="experience__content">
              <p className="eyebrow reveal">El entorno importa</p>
              <h2 className="experience__title reveal reveal-delay-1">
                Villa privada.<br />
                <span>Convivencia estrat&eacute;gica.</span>
              </h2>
              <p className="experience__text reveal reveal-delay-2">
                Cuando te rodeas de personas que quieren crecer, tus
                est&aacute;ndares cambian. Cuando cambian tus est&aacute;ndares,
                cambia tu nivel.
              </p>

              <div className="experience__features reveal reveal-delay-3">
                <div className="experience__feature">
                  4 d&iacute;as intensivos
                </div>
                <div className="experience__feature">
                  Habitaciones compartidas
                </div>
                <div className="experience__feature">
                  Dietas incluidas
                </div>
                <div className="experience__feature">
                  Sin distracciones
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MENTOR ===== */}
      <section className="mentor">
        <div className="container">
          <div className="mentor__grid">
            <div className="mentor__avatar reveal">
              <div className="mentor__avatar-inner">
                <img
                  src="/img/icon-red.png"
                  alt="Frank García"
                  className="mentor__avatar-icon"
                />
                <span className="mentor__avatar-name-text">Frank Garc&iacute;a</span>
              </div>
            </div>

            <div className="mentor__content">
              <p className="eyebrow reveal">Tu mentor</p>
              <h2 className="mentor__name reveal reveal-delay-1">Frank Garc&iacute;a</h2>
              <p className="mentor__bio reveal reveal-delay-2">
                M&aacute;s de 30 a&ntilde;os formando vendedores, emprendedores y networkers.
                M&aacute;s de 200.000 personas han pasado por sus talleres a lo largo
                de su trayectoria. Su enfoque no es motivarte. Es entrenarte
                hasta que lo hagas bien.
              </p>

              <div className="mentor__stats reveal reveal-delay-3">
                <div className="mentor__stat">
                  <div className="mentor__stat-value">30+</div>
                  <div className="mentor__stat-label">A&ntilde;os exp.</div>
                </div>
                <div className="mentor__stat">
                  <div className="mentor__stat-value">200K+</div>
                  <div className="mentor__stat-label">Personas</div>
                </div>
                <div className="mentor__stat">
                  <div className="mentor__stat-value">&infin;</div>
                  <div className="mentor__stat-label">Pr&aacute;ctica</div>
                </div>
              </div>

              <blockquote className="mentor__quote reveal reveal-delay-4">
                &ldquo;No estoy aqu&iacute; para motivarte. Estoy aqu&iacute; para
                entrenarte hasta que lo hagas bien.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AUDIENCE ===== */}
      <section className="audience">
        <div className="container">
          <div className="audience__header">
            <h2 className="audience__title reveal">
              &iquest;<span>Es</span> para ti?
            </h2>
          </div>

          <div className="audience__grid">
            <div className="audience__column audience__column--yes reveal">
              <div className="audience__column-header">
                <span className="audience__column-icon--yes">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                Es para ti si...
              </div>
              <ul className="audience__items">
                <li className="audience__item">
                  <span className="audience__item-marker--yes">&rsaquo;</span>
                  Quieres una nueva fuente de ingresos directa y estructurada.
                </li>
                <li className="audience__item">
                  <span className="audience__item-marker--yes">&rsaquo;</span>
                  Eres networker y quieres aumentar tu capacidad de cierre.
                </li>
                <li className="audience__item">
                  <span className="audience__item-marker--yes">&rsaquo;</span>
                  Eres emprendedor y necesitas vender mejor tu propio negocio.
                </li>
                <li className="audience__item">
                  <span className="audience__item-marker--yes">&rsaquo;</span>
                  No tienes experiencia, pero quieres empezar con estructura real.
                </li>
              </ul>
            </div>

            <div className="audience__column audience__column--no reveal reveal-delay-2">
              <div className="audience__column-header">
                <span className="audience__column-icon--no">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
                No es para ti si...
              </div>
              <ul className="audience__items">
                <li className="audience__item">
                  <span className="audience__item-marker--no">&rsaquo;</span>
                  Buscas dinero r&aacute;pido sin hacer llamadas.
                </li>
                <li className="audience__item">
                  <span className="audience__item-marker--no">&rsaquo;</span>
                  No est&aacute;s dispuesto a salir de tu zona c&oacute;moda.
                </li>
                <li className="audience__item">
                  <span className="audience__item-marker--no">&rsaquo;</span>
                  No quieres trabajar intensamente durante 4 d&iacute;as.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="pricing">
        <div className="container">
          <div className="pricing__container">
            <p className="eyebrow reveal">Inversi&oacute;n</p>
            <h2 className="pricing__title reveal reveal-delay-1">
              Hablemos claro.
            </h2>

            <div className="pricing__card reveal reveal-delay-2">
              <div className="pricing__original">5.000&euro;</div>
              <div className="pricing__amount">
                1.997<span className="pricing__amount-currency">&euro;</span>
              </div>
              <div className="pricing__edition">Esta edici&oacute;n &mdash; Plazas limitadas</div>

              <hr className="divider divider--center" />

              <ul className="pricing__includes">
                <li className="pricing__includes-item">
                  <span className="pricing__includes-check"><CheckIcon /></span>
                  4 d&iacute;as de formaci&oacute;n intensiva pr&aacute;ctica
                </li>
                <li className="pricing__includes-item">
                  <span className="pricing__includes-check"><CheckIcon /></span>
                  Mentor&iacute;a directa con Frank Garc&iacute;a
                </li>
                <li className="pricing__includes-item">
                  <span className="pricing__includes-check"><CheckIcon /></span>
                  Din&aacute;micas en vivo y contexto real de aplicaci&oacute;n
                </li>
                <li className="pricing__includes-item">
                  <span className="pricing__includes-check"><CheckIcon /></span>
                  Acceso a oportunidades estrat&eacute;gicas del ecosistema
                </li>
                <li className="pricing__includes-item">
                  <span className="pricing__includes-check"><CheckIcon /></span>
                  NFT de participaci&oacute;n en villa tokenizada incluido
                </li>
                <li className="pricing__includes-item">
                  <span className="pricing__includes-check"><CheckIcon /></span>
                  Alojamiento y dietas incluidas
                </li>
              </ul>

              <a href={CTA_URL} className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                Quiero aplicar al Bootcamp
                <span className="btn__arrow">&rarr;</span>
              </a>

              <div className="pricing__urgency">
                <span className="pricing__urgency-dot" />
                M&aacute;s de la mitad de las plazas ya est&aacute;n asignadas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="process" id="aplicar">
        <div className="container">
          <div className="process__header">
            <p className="eyebrow reveal">C&oacute;mo funciona</p>
            <h2 className="process__title reveal reveal-delay-1">
              El proceso de <span>aplicaci&oacute;n</span>
            </h2>
          </div>

          <div className="process__steps stagger-children">
            <div className="process__step reveal">
              <div className="process__step-number">I</div>
              <h3 className="process__step-title">Aplica</h3>
              <p className="process__step-text">
                Completa el cuestionario de precalificaci&oacute;n.
                No puedes comprar directamente.
              </p>
              <div className="process__step-connector" />
            </div>

            <div className="process__step reveal">
              <div className="process__step-number">II</div>
              <h3 className="process__step-title">Validaci&oacute;n</h3>
              <p className="process__step-text">
                Si tu perfil encaja, recibir&aacute;s contacto por
                WhatsApp para los siguientes pasos.
              </p>
              <div className="process__step-connector" />
            </div>

            <div className="process__step reveal">
              <div className="process__step-number">III</div>
              <h3 className="process__step-title">Confirma</h3>
              <p className="process__step-text">
                Reserva tu plaza y prep&aacute;rate para 4 d&iacute;as
                que van a cambiar tu direcci&oacute;n.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta">
        <div className="container">
          <img
            src="/img/logo-white.png"
            alt="Bootcamp de Resultados"
            className="final-cta__logo reveal"
          />
          <h2 className="final-cta__title reveal reveal-delay-1">
            Si no haces nada,<br />
            todo seguir&aacute; <span>igual.</span>
          </h2>
          <p className="final-cta__subtitle reveal reveal-delay-2">
            Si decides actuar, al menos habr&aacute;s cambiado la direcci&oacute;n.
            La decisi&oacute;n es tuya.
          </p>
          <div className="final-cta__btn-wrap reveal reveal-delay-3">
            <a href={CTA_URL} className="btn btn--primary">
              Quiero aplicar al Bootcamp de Resultados
              <span className="btn__arrow">&rarr;</span>
            </a>
          </div>
          <p className="final-cta__disclaimer reveal reveal-delay-4">
            No hay cancelaciones ni reembolsos. Es una experiencia inmersiva
            dise&ntilde;ada para personas comprometidas.
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <img
              src="/img/logo-white.png"
              alt="Bootcamp de Resultados"
              className="footer__logo"
            />
            <p className="footer__text">
              Bootcamp de Resultados &mdash; Frank Garc&iacute;a &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>

      {/* ===== STICKY BAR ===== */}
      <div className={`sticky-bar ${stickyVisible ? 'sticky-bar--visible' : ''}`}>
        <div className="sticky-bar__inner">
          <p className="sticky-bar__text">
            <strong>30 plazas</strong> &mdash; M&aacute;s de la mitad asignadas
          </p>
          <a href={CTA_URL} className="btn btn--primary">
            Aplicar ahora
            <span className="btn__arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
