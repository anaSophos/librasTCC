import axios from 'axios'
import { Buffer } from 'buffer';

// Função para converter dados de URL para Base64
async function convertUrlToBase64(url) {
  try {
    // Fazer a requisição HTTP
    const response = await axios.get(url, {
      responseType: 'arraybuffer'
    });

    // Converter os dados para Buffer
    const buffer = Buffer.from(response.data, 'binary');

    // Converter Buffer para Base64
    const base64String = buffer.toString('base64');

    console.log('Base64 String:', base64String);
  } catch (error) {
    console.error('Erro ao buscar ou converter o URL:', error);
  }
}

// Chamar a função com o URL desejado
convertUrlToBase64('https://example.com/');
