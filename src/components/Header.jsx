import { STEPS } from '../constants'

export function Header({ step }) {
  const pct = ((step + 1) / STEPS.length) * 100

  return (
    <div style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '28px 24px 0' }}>

        {/* Marca + contato */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: 28,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: 6,
              }}
            >
              Gestão de Milhas
            </p>
            <h1
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(26px, 5vw, 40px)',
                fontWeight: 400,
                color: 'var(--text)',
                lineHeight: 1.15,
              }}
            >
              Guilherme Vieira
            </h1>
            <p
              style={{
                fontSize: 13,
                fontWeight: 300,
                color: 'var(--text-soft)',
                marginTop: 6,
                lineHeight: 1.6,
              }}
            >
              Gestor de Milhas · Concierge VIP · Business & First Class
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <p
              style={{ fontSize: 12, fontWeight: 300, color: 'var(--text-faint)', lineHeight: 1.9 }}
            >
              Balneário Camboriú / SC
              <br />
              <a
                href="tel:+5547997202400"
                style={{ color: 'var(--gold)', textDecoration: 'none' }}
              >
                47 99720-2400
              </a>
              <br />
              @gvsvip
            </p>
          </div>
        </div>

        {/* Indicadores de etapa */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            {STEPS.map((s, i) => (
              <div key={s.num} style={{ textAlign: 'center', flex: 1 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    border: i <= step ? 'none' : '1.5px solid var(--border)',
                    background:
                      i < step
                        ? 'var(--gold)'
                        : i === step
                        ? 'var(--gold-pale)'
                        : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 4px',
                    transition: 'all 0.3s',
                  }}
                >
                  {i < step ? (
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path
                        d="M1 5l3.5 3.5L11 1"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        color: i === step ? 'var(--gold)' : 'var(--text-faint)',
                      }}
                    >
                      {s.num}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Barra de progresso */}
          <div style={{ height: 2, background: 'var(--border)', borderRadius: 1 }}>
            <div
              style={{
                height: 2,
                borderRadius: 1,
                background: 'var(--gold)',
                width: `${pct}%`,
                transition: 'width 0.4s ease',
              }}
            />
          </div>
        </div>

        {/* Título da etapa atual */}
        <div style={{ padding: '20px 0 24px' }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-faint)',
              marginBottom: 5,
            }}
          >
            Etapa {step + 1} de {STEPS.length} — {STEPS[step].sub}
          </p>
          <h2
            style={{
              fontFamily: 'var(--display)',
              fontSize: 24,
              fontWeight: 400,
              color: 'var(--text)',
            }}
          >
            {STEPS[step].title}
          </h2>
        </div>
      </div>
    </div>
  )
}
