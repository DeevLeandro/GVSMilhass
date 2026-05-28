import { useState, useCallback } from 'react'
import { INIT, STEPS, WA_NUMBER } from './constants'
import { buildWhatsAppMessage } from './utils'
import { Hero } from './components/Hero'
import { Header } from './components/Header'
import { Success } from './components/Success'
import { WhatsAppIcon } from './components/UI'
import { StepDados, StepViagens, StepPremium, StepFinanceiro, StepExpectativas } from './components/Steps'

export default function App() {
  const [screen, setScreen] = useState('hero') // 'hero' | 'form' | 'success'
  const [f, setF] = useState(INIT)
  const [step, setStep] = useState(0)
  const [errs, setErrs] = useState({})
  const [sending, setSending] = useState(false)

  const set = useCallback(
    (field) => (val) => {
      setF((prev) => ({ ...prev, [field]: val }))
      setErrs((prev) => {
        const n = { ...prev }
        delete n[field]
        return n
      })
    },
    []
  )

  function validate() {
    const e = {}
    if (step === 0) {
      if (!f.nome.trim()) e.nome = 'Nome obrigatório'
      if (!f.email.trim() || !/\S+@\S+\.\S+/.test(f.email)) e.email = 'E-mail inválido'
      if (!f.cpf || f.cpf.length < 14) e.cpf = 'CPF inválido'
      if (!f.telefone || f.telefone.length < 15) e.telefone = 'Número inválido'
      if (!f.endereco.trim()) e.endereco = 'Endereço obrigatório'
    }
    return e
  }

  function next() {
    const e = validate()
    if (Object.keys(e).length) {
      setErrs(e)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    setErrs({})
    setStep((s) => s + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function back() {
    setStep((s) => s - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function submit() {
    setSending(true)
    const msg = buildWhatsAppMessage(f)
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
    setTimeout(() => {
      setSending(false)
      setScreen('success')
    }, 500)
  }

  if (screen === 'hero') {
    return (
      <Hero
        onStart={() => {
          setScreen('form')
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      />
    )
  }

  if (screen === 'success') {
    return (
      <Success
        onReset={() => {
          setF(INIT)
          setStep(0)
          setScreen('hero')
        }}
      />
    )
  }

  const isLast = step === STEPS.length - 1

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-warm)' }}>
      <Header step={step} />

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '36px 24px 80px' }}>

        {step === 0 && (
          <div
            style={{
              background: 'var(--gold-pale)',
              border: '1px solid rgba(168,135,74,0.2)',
              borderRadius: 8,
              padding: '16px 20px',
              marginBottom: 32,
            }}
          >
            <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--text-mid)', lineHeight: 1.75 }}>
              Este questionário mapeia seu perfil de viagem, hábitos de consumo e expectativas
              para criarmos um trabalho personalizado de gestão de milhas, pontos e experiências
              de alto padrão.
            </p>
          </div>
        )}

        {step === 0 && <StepDados f={f} set={set} errs={errs} />}
        {step === 1 && <StepViagens f={f} set={set} />}
        {step === 2 && <StepPremium f={f} set={set} />}
        {step === 3 && <StepFinanceiro f={f} set={set} />}
        {step === 4 && <StepExpectativas f={f} set={set} />}

        <div
          style={{
            display: 'flex',
            justifyContent: step === 0 ? 'flex-end' : 'space-between',
            alignItems: 'center',
            marginTop: 40,
            paddingTop: 28,
            borderTop: '1px solid var(--border)',
          }}
        >
          {step > 0 && (
            <button className="btn-ghost" onClick={back}>
              ← Voltar
            </button>
          )}

          {!isLast ? (
            <button className="btn-primary" onClick={next}>
              Continuar →
            </button>
          ) : (
            <button className="btn-primary" onClick={submit} disabled={sending}>
              {sending ? (
                'Abrindo WhatsApp...'
              ) : (
                <>
                  <WhatsAppIcon />
                  Enviar via WhatsApp
                </>
              )}
            </button>
          )}
        </div>

        <p
          style={{
            textAlign: 'center',
            fontSize: 12,
            fontWeight: 300,
            color: 'var(--text-faint)',
            marginTop: 48,
          }}
        >
          Os campos marcados com <span style={{ color: 'var(--gold)' }}>*</span> são obrigatórios
        </p>
      </div>
    </div>
  )
}
