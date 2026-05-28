export function applyMask(val, mask) {
  let v = val.replace(/\D/g, '')
  let r = ''
  let vi = 0
  for (let i = 0; i < mask.length && vi < v.length; i++) {
    if (mask[i] === '9') {
      r += v[vi++]
    } else {
      r += mask[i]
      if (v[vi] === mask[i]) vi++
    }
  }
  return r
}

export function toggle(arr, val) {
  return arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]
}

export function buildWhatsAppMessage(f) {
  const v = (label, x) => (x ? `• ${label}: ${x}` : '')
  const a = (label, x) => (x && x.length ? `• ${label}: ${x.join(', ')}` : '')

  return `
✈ *GESTÃO DE MILHAS GVS — PRÉ-CADASTRO*
━━━━━━━━━━━━━━━━━━━━━━━━

*DADOS PESSOAIS*
${v('Nome', f.nome)}
${v('E-mail', f.email)}
${v('CPF', f.cpf)}
${v('Telefone', f.telefone)}
${v('Endereço', f.endereco)}

*PERFIL DE VIAGEM*
${v('Viagens nacionais/ano', f.viagens_nac)}
${v('Viagens internacionais/ano', f.viagens_int)}
${a('Viaja com', f.viaja_com)}
${v('Flexibilidade', f.flexibilidade)}
${v('Países desejados', f.paises_deseja)}
${v('Destino dos sonhos', f.destino_sonho)}
${v('Viagens planejadas', f.viagens_planejadas)}

*EXPERIÊNCIA PREMIUM*
${v('Preferência de destinos', f.preferencia_destino)}
${a('Classes utilizadas', f.classes)}
${v('CIA preferida', f.cia)}
${v('Já viajou em 1ª Classe', f.first_class)}
${v('Aceita conexão estratégica', f.aceita_conexao)}
${a('Valoriza no voo', f.valoriza)}
${v('Hotéis de luxo', f.hoteis)}
${a('Serviços utilizaria', f.servicos)}
${v('Nível de exigência', f.exigencia)}
${v('Não abre mão de', f.nao_abre_mao)}

*CARTÕES & MILHAS*
${v('Gasto médio', f.gasto)}
${v('Cartões', f.cartoes)}
${v('Programas de fidelidade', f.fidelidade)}
${v('Milhas acumuladas', f.milhas)}

*EXPECTATIVAS*
${a('Foco principal', f.foco)}
${v('Informações adicionais', f.info_adicional)}

━━━━━━━━━━━━━━━━━━━━━━━━`
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}
