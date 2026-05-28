// components/Hero.jsx
import { useState, useEffect, useCallback } from 'react'

const PHOTOS = [
  { src: '/images/cliente-paris.jpeg', label: '', city: '', description: '' },
  { src: '/images/cliente-italy.jpeg', label: '', city: '', description: '' },
  { src: '/images/cliente-maldives.jpeg', label: '', city: '', description: '' },
  { src: '/images/cliente-singapore.jpeg', label: '', city: '', description: '' },
  { src: '/images/cliente-suite.jpeg', label: '', city: '', description: '' },
  { src: '/images/guilherme-vieira.jpeg', label: '', city: '', description: '' },
]

export function Hero({ onStart }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex(index)
    setTimeout(() => setIsTransitioning(false), 800)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((activeIndex + 1) % PHOTOS.length)
  }, [activeIndex, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((activeIndex - 1 + PHOTOS.length) % PHOTOS.length)
  }, [activeIndex, goToSlide])

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0A0A',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }} className="hero-grid">

      {/* ── ESQUERDA (conteúdo estático) ── */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(32px, 5vw, 60px)',
        minHeight: '100vh',
        zIndex: 10,
        position: 'relative',
        background: 'linear-gradient(135deg, #0A0A0A 0%, rgba(10,10,10,0.95) 100%)',
      }}>

        {/* Topo */}
        <div>
          <p style={{ 
            fontSize: 30, 
            fontWeight: 500, 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase', 
            color: '#A8874A',
            position: 'relative',
            display: 'inline-block',
          }}>
            GVS · Gestão de Milhas
          </p>
          <div style={{ 
            width: 55, 
            height: 1, 
            background: '#A8874A', 
            marginTop: 12,
            transition: 'width 0.4s ease',
          }} />
        </div>

        {/* Centro */}
        <div style={{ maxWidth: 480 }}>
          <p style={{ 
            fontSize: 10, 
            fontWeight: 400, 
            letterSpacing: '0.16em', 
            textTransform: 'uppercase', 
            color: 'rgba(168,135,74,0.65)', 
            marginBottom: 24,
          }}>
            Pré-Cadastro de Cliente
          </p>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(42px, 5vw, 64px)',
            fontWeight: 400,
            color: '#FFF',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            marginBottom: 32,
          }}>
            Viagens que<br />
            poucos vivem.
            <span style={{ 
              display: 'block',
              fontStyle: 'italic', 
              color: '#D4B896',
              marginTop: 8,
            }}>Você merece.</span>
          </h1>

          <p style={{ 
            fontSize: 15, 
            fontWeight: 300, 
            color: 'rgba(255,255,255,0.45)', 
            lineHeight: 1.7, 
            maxWidth: 380, 
            marginBottom: 48,
          }}>
            Gestão estratégica de milhas, acesso a First Class e experiências exclusivas — planejadas para o seu perfil.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
            <button
              onClick={onStart}
              style={{
                background: '#A8874A',
                color: '#fff',
                border: 'none',
                borderRadius: 2,
                padding: '16px 42px',
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#9B7840'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.gap = '18px'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#A8874A'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.gap = '14px'
              }}
            >
              Fazer meu cadastro
              <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span style={{ fontSize: 11, fontWeight: 300, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em' }}>
              Gratuito · menos de 5 minutos
            </span>
          </div>
        </div>

        {/* Rodapé */}
        <div style={{ 
          borderTop: '1px solid rgba(168,135,74,0.15)', 
          paddingTop: 28, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', 
          flexWrap: 'wrap', 
          gap: 20 
        }}>
          <div style={{ display: 'flex', gap: 48 }}>
            {[
              { label: 'Especialidade', value: 'First & Business' },
              { label: 'Serviço', value: 'Concierge VIP' }
            ].map(item => (
              <div key={item.label}>
                <p style={{ 
                  fontSize: 9, 
                  fontWeight: 400, 
                  letterSpacing: '0.12em', 
                  textTransform: 'uppercase', 
                  color: 'rgba(255,255,255,0.2)', 
                  marginBottom: 6,
                }}>
                  {item.label}
                </p>
                <p style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  fontSize: 14, 
                  fontWeight: 400, 
                  color: '#D4B896',
                }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <a 
            href="https://wa.me/5547997202400" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 8, 
              textDecoration: 'none', 
              border: '1px solid rgba(74, 168, 79, 0.25)', 
              borderRadius: 2, 
              padding: '8px 16px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#4aa87b'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(74, 168, 132, 0.25)'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#4aa892">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span style={{ fontSize: 11, fontWeight: 300, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.04em' }}>
              47 99720-2400
            </span>
          </a>
        </div>
      </div>

      {/* ── DIREITA: CARROSSEL VERTICAL ── */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        background: '#000',
      }}>

        {/* Slides */}
        <div style={{
          position: 'relative',
          height: '100%',
          width: '100%',
        }}>
          {PHOTOS.map((photo, idx) => (
            <div
              key={photo.src}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: activeIndex === idx ? 1 : 0,
                transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: activeIndex === idx ? 2 : 1,
              }}
            >
              <img
                src={photo.src}
                alt={`Guilherme — ${photo.label}`}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'brightness(0.75) saturate(0.9)',
                  transform: activeIndex === idx ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 8s ease-out',
                }}
              />
              
              {/* Overlay gradiente */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)',
                pointerEvents: 'none',
              }} />

              {/* Conteúdo do slide */}
              <div style={{
                position: 'absolute',
                bottom: 48,
                left: 32,
                right: 32,
                zIndex: 10,
                transform: activeIndex === idx ? 'translateY(0)' : 'translateY(30px)',
                opacity: activeIndex === idx ? 1 : 0,
                transition: 'transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) 0.2s, opacity 0.4s ease 0.2s',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <div style={{ 
                    width: 32, 
                    height: 1, 
                    background: '#A8874A',
                    transform: activeIndex === idx ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.5s ease 0.4s',
                  }} />
                  <span style={{ 
                    fontSize: 11, 
                    fontWeight: 400, 
                    letterSpacing: '0.14em', 
                    textTransform: 'uppercase', 
                    color: '#A8874A',
                  }}>
                    Experiencias Reais
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 32,
                  fontWeight: 400,
                  color: '#FFF',
                  marginBottom: 6,
                  letterSpacing: '-0.01em',
                }}>
                  {photo.label}
                </h3>
                <p style={{
                  fontSize: 13,
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: 4,
                }}>
                  {photo.city}
                </p>
                <p style={{
                  fontSize: 13,
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.4)',
                  maxWidth: 280,
                }}>
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores (dots) */}
        <div style={{
          position: 'absolute',
          bottom: 32,
          right: 32,
          display: 'flex',
          gap: 12,
          zIndex: 20,
        }}>
          {PHOTOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              style={{
                width: activeIndex === idx ? 32 : 8,
                height: 8,
                borderRadius: 4,
                background: activeIndex === idx ? '#A8874A' : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#A8874A'}
              onMouseLeave={e => e.currentTarget.style.background = activeIndex === idx ? '#A8874A' : 'rgba(255,255,255,0.3)'}
            />
          ))}
        </div>

        {/* Setas de navegação */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.15)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            transition: 'all 0.2s',
            backdropFilter: 'blur(4px)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(168,135,74,0.3)'
            e.currentTarget.style.borderColor = '#A8874A'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(0,0,0,0.4)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.15)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            transition: 'all 0.2s',
            backdropFilter: 'blur(4px)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(168,135,74,0.3)'
            e.currentTarget.style.borderColor = '#A8874A'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(0,0,0,0.4)'
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Badge de navegação */}
        <div style={{
          position: 'absolute',
          top: 32,
          right: 32,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          borderRadius: 20,
          padding: '6px 14px',
          zIndex: 20,
          fontSize: 11,
          fontWeight: 400,
          letterSpacing: '0.1em',
          color: 'rgba(255,255,255,0.6)',
          fontFamily: "'Inter', sans-serif",
        }}>
          {String(activeIndex + 1).padStart(2, '0')} / {String(PHOTOS.length).padStart(2, '0')}
        </div>
      </div>
    </div>
  )
}