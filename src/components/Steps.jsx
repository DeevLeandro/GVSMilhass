import { Field, MaskedInput, RadioGroup, CheckGroup, Hr, Grid } from './UI'

/* ── Etapa 1: Dados Pessoais ── */
export function StepDados({ f, set, errs }) {
  return (
    <div className="fade-up">
      <Grid>
        <Field label="Nome completo" req err={errs.nome}>
          <input
            value={f.nome}
            onChange={(e) => set('nome')(e.target.value)}
            placeholder="Seu nome completo"
          />
        </Field>
        <Field label="E-mail" req err={errs.email}>
          <input
            type="email"
            value={f.email}
            onChange={(e) => set('email')(e.target.value)}
            placeholder="seu@email.com"
          />
        </Field>
        <Field label="CPF" req err={errs.cpf}>
          <MaskedInput
            mask="999.999.999-99"
            value={f.cpf}
            onChange={set('cpf')}
            placeholder="000.000.000-00"
          />
        </Field>
        <Field label="Telefone / WhatsApp" req err={errs.telefone}>
          <MaskedInput
            mask="(99) 99999-9999"
            value={f.telefone}
            onChange={set('telefone')}
            placeholder="(00) 00000-0000"
          />
        </Field>
      </Grid>
      <Field label="Endereço completo" req err={errs.endereco}>
        <input
          value={f.endereco}
          onChange={(e) => set('endereco')(e.target.value)}
          placeholder="Rua, número, bairro, cidade — UF"
        />
      </Field>
    </div>
  )
}

/* ── Etapa 2: Perfil de Viagem ── */
export function StepViagens({ f, set }) {
  return (
    <div className="fade-up">
      <Field
        label="Viagens nacionais por ano"
        req
        hint="Em média, quantas vezes você viaja dentro do Brasil?"
      >
        <RadioGroup
          options={['1 a 2', '2 a 4', 'Mais de 5']}
          value={f.viagens_nac}
          onChange={set('viagens_nac')}
        />
      </Field>
      <Hr />
      <Field
        label="Viagens internacionais por ano"
        req
        hint="Em média, quantas viagens internacionais você realiza?"
      >
        <RadioGroup
          options={['1 a 2', '2 a 4', 'Mais de 5']}
          value={f.viagens_int}
          onChange={set('viagens_int')}
        />
      </Field>
      <Hr />
      <Field label="Viaja normalmente com">
        <CheckGroup
          options={['Casal', 'Família', 'Com equipe', 'Solo']}
          value={f.viaja_com}
          onChange={set('viaja_com')}
        />
      </Field>
      <Hr />
      <Field label="Flexibilidade de datas" req>
        <RadioGroup
          options={[
            'Tenho bastante flexibilidade',
            'Flexibilidade moderada',
            'Datas quase sempre fixas',
            'Datas totalmente fixas',
          ]}
          value={f.flexibilidade}
          onChange={set('flexibilidade')}
        />
      </Field>
      <Hr />
      <Grid>
        <Field label="Países que deseja conhecer" hint="Curto, médio e longo prazo">
          <textarea
            value={f.paises_deseja}
            onChange={(e) => set('paises_deseja')(e.target.value)}
            placeholder="Ex: Japão, Maldivas, Islândia..."
          />
        </Field>
        <Field label="Destino dos sonhos" hint="Aquele que ainda não realizou">
          <textarea
            value={f.destino_sonho}
            onChange={(e) => set('destino_sonho')(e.target.value)}
            placeholder="Descreva o destino..."
          />
        </Field>
      </Grid>
      <Field label="Viagens planejadas nos próximos 12 a 24 meses">
        <textarea
          value={f.viagens_planejadas}
          onChange={(e) => set('viagens_planejadas')(e.target.value)}
          placeholder="Destinos, datas aproximadas, ocasião..."
        />
      </Field>
    </div>
  )
}

/* ── Etapa 3: Experiência Premium ── */
export function StepPremium({ f, set }) {
  return (
    <div className="fade-up">
      <Field label="Preferência de destinos" req>
        <RadioGroup
          options={[
            'Destinos de luxo',
            'Experiências exclusivas e pouco exploradas',
            'Ambos',
          ]}
          value={f.preferencia_destino}
          onChange={set('preferencia_destino')}
        />
      </Field>
      <Hr />
      <Field label="Classes que você utiliza atualmente">
        <CheckGroup
          options={['Econômica', 'Premium Economy', 'Executiva', 'Primeira Classe']}
          value={f.classes}
          onChange={set('classes')}
        />
      </Field>
      <Hr />
      <Grid>
        <Field label="Companhia aérea preferida">
          <input
            value={f.cia}
            onChange={(e) => set('cia')(e.target.value)}
            placeholder="Ex: LATAM, Emirates, TAP..."
          />
        </Field>
        <Field label="Já viajou em Primeira Classe?">
          <RadioGroup
            options={['Sim', 'Não']}
            value={f.first_class}
            onChange={set('first_class')}
          />
        </Field>
      </Grid>
      <Hr />
      <Field label="Aceitaria conexão estratégica para acessar Primeira Classe?">
        <RadioGroup
          options={['Sim', 'Não', 'Depende do caso']}
          value={f.aceita_conexao}
          onChange={set('aceita_conexao')}
        />
      </Field>
      <Hr />
      <Field label="O que mais valoriza em um voo premium">
        <CheckGroup
          options={['Conforto', 'Privacidade', 'Exclusividade', 'Serviço', 'Status']}
          value={f.valoriza}
          onChange={set('valoriza')}
        />
      </Field>
      <Hr />
      <Grid>
        <Field label="Hotéis de luxo e resorts fazem parte do seu padrão?">
          <RadioGroup
            options={['Sim', 'Não', 'Talvez']}
            value={f.hoteis}
            onChange={set('hoteis')}
          />
        </Field>
        <Field label="Nível de exigência como viajante">
          <RadioGroup
            options={['Baixo', 'Médio', 'Alto', 'Muito alto']}
            value={f.exigencia}
            onChange={set('exigencia')}
          />
        </Field>
      </Grid>
      <Hr />
      <Field label="Serviços que utiliza ou utilizaria">
        <CheckGroup
          options={['Transfers privados', 'Concierge VIP', 'Experiências personalizadas']}
          value={f.servicos}
          onChange={set('servicos')}
        />
      </Field>
      <Hr />
      <Field label="O que não abre mão ao viajar">
        <textarea
          value={f.nao_abre_mao}
          onChange={(e) => set('nao_abre_mao')(e.target.value)}
          placeholder="Descreva o que é indispensável..."
        />
      </Field>
    </div>
  )
}

/* ── Etapa 4: Cartões & Milhas ── */
export function StepFinanceiro({ f, set }) {
  return (
    <div className="fade-up">
      <Field label="Gasto médio mensal no cartão de crédito" req>
        <RadioGroup
          options={['R$20.000 a R$25.000', 'R$30.000 a R$40.000', 'Acima de R$50.000']}
          value={f.gasto}
          onChange={set('gasto')}
        />
      </Field>
      <Hr />
      <Field label="Cartões de crédito que possui" hint="Liste todos — bandeira e banco">
        <textarea
          value={f.cartoes}
          onChange={(e) => set('cartoes')(e.target.value)}
          placeholder="Ex: Itaú Personnalité Visa Infinite, Bradesco Amex Black..."
        />
      </Field>
      <Hr />
      <Grid>
        <Field label="Programas de fidelidade que participa">
          <textarea
            value={f.fidelidade}
            onChange={(e) => set('fidelidade')(e.target.value)}
            placeholder="Ex: LATAM Pass, Smiles, TudoAzul..."
          />
        </Field>
        <Field label="Milhas ou pontos acumulados" hint="Se sim, em quais e quantidade aproximada">
          <textarea
            value={f.milhas}
            onChange={(e) => set('milhas')(e.target.value)}
            placeholder="Ex: 150.000 LATAM, 80.000 Smiles..."
          />
        </Field>
      </Grid>
    </div>
  )
}

/* ── Etapa 5: Expectativas ── */
export function StepExpectativas({ f, set }) {
  return (
    <div className="fade-up">
      <Field label="Seu foco principal" req hint="Selecione quantos preferir">
        <CheckGroup
          options={[
            'Viajar com mais frequência',
            'Elevar o padrão das viagens',
            'Ter um profissional que resolva tudo',
            'Planejamento estratégico / economia',
            'Acesso a produtos e experiências raras',
          ]}
          value={f.foco}
          onChange={set('foco')}
        />
      </Field>
      <Hr />
      <Field
        label="Informações adicionais"
        hint="Algo que considere importante e que não foi perguntado"
      >
        <textarea
          value={f.info_adicional}
          onChange={(e) => set('info_adicional')(e.target.value)}
          style={{ minHeight: 110 }}
          placeholder="Conte mais sobre seu perfil, expectativas ou qualquer detalhe relevante..."
        />
      </Field>
    </div>
  )
}
