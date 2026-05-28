export function Success({ onReset }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-warm)',
        padding: 24,
      }}
    >
      <div
        className="pop-in"
        style={{ maxWidth: 460, width: '100%', textAlign: 'center', padding: '56px 32px' }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            border: '1px solid var(--gold-line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 32px',
            background: 'var(--gold-pale)',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.5"
          >
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: 14,
          }}
        >
          Cadastro Enviado
        </p>

        <h2
          style={{
            fontFamily: 'var(--display)',
            fontSize: 34,
            fontWeight: 400,
            color: 'var(--text)',
            lineHeight: 1.25,
            marginBottom: 18,
          }}
        >
          Obrigado pelo
          <br />
          seu interesse
        </h2>

        <p
          style={{
            fontSize: 14,
            fontWeight: 300,
            color: 'var(--text-soft)',
            lineHeight: 1.85,
            marginBottom: 36,
          }}
        >
          Suas informações foram encaminhadas ao Guilherme via WhatsApp. Em breve você receberá
          uma proposta personalizada de gestão de milhas e experiências de alto padrão.
        </p>

        <div style={{ width: 40, height: 1, background: 'var(--border)', margin: '0 auto 36px' }} />

        <button className="btn-ghost" onClick={onReset}>
          Novo cadastro
        </button>
      </div>
    </div>
  )
}
