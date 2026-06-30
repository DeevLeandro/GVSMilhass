const TO_EMAIL = 'gvsmilhas@gmail.com'
const FROM_EMAIL = 'onboarding@resend.dev'

function buildEmailHTML(f) {
  const row = (label, value) =>
    value
      ? `<tr>
          <td style="padding:6px 12px 6px 0;font-size:13px;color:#888;white-space:nowrap;vertical-align:top">${label}</td>
          <td style="padding:6px 0;font-size:13px;color:#1a1a1a">${value}</td>
        </tr>`
      : ''

  const section = (title, rows) => `
      <tr>
        <td colspan="2" style="padding:28px 0 10px">
          <p style="margin:0;font-size:10px;font-weight:600;letter-spacing:0.14em;
                    text-transform:uppercase;color:#a8874a;border-bottom:1px solid #e8e0d4;
                    padding-bottom:8px">${title}</p>
        </td>
      </tr>
      ${rows.filter(Boolean).join('')}`

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:'Georgia',serif">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 16px">
        <table width="600" cellpadding="0" cellspacing="0"
              style="background:#fff;border-radius:4px;overflow:hidden;
                      box-shadow:0 2px 12px rgba(0,0,0,0.08)">
          <tr>
            <td style="background:#0d0d0d;padding:32px 40px">
              <p style="margin:0 0 4px;font-size:10px;font-weight:600;letter-spacing:0.18em;
                        text-transform:uppercase;color:#a8874a">Gestão de Milhas</p>
              <h1 style="margin:0;font-size:26px;font-weight:400;color:#fff">Guilherme Vieira</h1>
              <p style="margin:6px 0 0;font-size:12px;color:rgba(255,255,255,0.4)">
                Novo pré-cadastro recebido
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 40px">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${section('Dados Pessoais', [
                  row('Nome',      f.nome),
                  row('E-mail',    f.email),
                  row('CPF',       f.cpf),
                  row('Telefone',  f.telefone),
                  row('Endereço',  f.endereco),
                ])}
                ${section('Perfil de Viagem', [
                  row('Viagens nacionais/ano',      f.viagens_nac),
                  row('Viagens internacionais/ano', f.viagens_int),
                  row('Viaja com',                  Array.isArray(f.viaja_com) ? f.viaja_com.join(', ') : f.viaja_com),
                  row('Flexibilidade',              f.flexibilidade),
                  row('Países desejados',           f.paises_deseja),
                  row('Destino dos sonhos',         f.destino_sonho),
                  row('Viagens planejadas',         f.viagens_planejadas),
                ])}
                ${section('Experiência Premium', [
                  row('Preferência de destinos',    f.preferencia_destino),
                  row('Classes utilizadas',         Array.isArray(f.classes) ? f.classes.join(', ') : f.classes),
                  row('CIA preferida',              f.cia),
                  row('Já viajou em 1ª Classe',     f.first_class),
                  row('Aceita conexão estratégica', f.aceita_conexao),
                  row('Valoriza no voo',            Array.isArray(f.valoriza) ? f.valoriza.join(', ') : f.valoriza),
                  row('Hotéis de luxo',             f.hoteis),
                  row('Serviços utilizaria',        Array.isArray(f.servicos) ? f.servicos.join(', ') : f.servicos),
                  row('Nível de exigência',         f.exigencia),
                  row('Não abre mão de',            f.nao_abre_mao),
                ])}
                ${section('Cartões & Milhas', [
                  row('Gasto médio mensal',      f.gasto),
                  row('Cartões',                 f.cartoes),
                  row('Programas de fidelidade', f.fidelidade),
                  row('Milhas acumuladas',       f.milhas),
                ])}
                ${section('Expectativas', [
                  row('Foco principal',         Array.isArray(f.foco) ? f.foco.join(', ') : f.foco),
                  row('Informações adicionais', f.info_adicional),
                ])}
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#f5f0e8;padding:20px 40px;text-align:center">
              <p style="margin:0;font-size:11px;color:#aaa">
                GVS Milhas · Balneário Camboriú / SC · 47 99720-2400
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </td>
</body>
</html>`
}

export async function sendEmail(formData) {
  try {
    const res = await fetch('/api/resend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: formData.email || undefined,
        subject: `✈ Novo cadastro — ${formData.nome || 'Cliente GVS'}`,
        html: buildEmailHTML(formData),
      }),
    })
//refeito o codigo 
    const data = await res.json()

    if (!res.ok) {
      console.error('[Resend] erro:', data)
      return { ok: false, error: data }
    }

    console.log('[Resend] email enviado com sucesso:', data.id)
    return { ok: true, id: data.id }
  } catch (err) {
    console.error('[Resend] falha de rede:', err)
    return { ok: false, error: err.message }
  }
}