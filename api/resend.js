// api/resend.js
const RESEND_API_KEY = 're_KFofgexw_6DWx5JH9UdtV4jXuG9FUG3vB';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Verifica se a chave está definida
    if (!RESEND_API_KEY) {
      console.error('Chave API não encontrada');
      return res.status(500).json({ error: 'API key not configured' });
    }

    console.log('Enviando email...');
    console.log('API Key (primeiros 10 caracteres):', RESEND_API_KEY.substring(0, 10) + '...');
    
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY.trim()}`, // Adicionado trim() para remover espaços
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Erro Resend - Status:', response.status);
      console.error('Erro Resend - Dados:', data);
      return res.status(response.status).json({ error: data });
    }

    console.log('Email enviado com sucesso:', data.id);
    return res.status(200).json(data);
  } catch (error) {
    console.error('Erro:', error);
    return res.status(500).json({ error: error.message });
  }
}