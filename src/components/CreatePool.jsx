import React, { useState, useEffect } from 'react';

export default function CreatePoll() {
  const [question, setQuestion] = useState('');

  useEffect(() => {
    // Inicializa o Web App dentro do Telegram
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  const handleSubmit = () => {
    const payload = { question };
    // Envia os dados para o bot via Telegram WebApp.sendData
    window.Telegram.WebApp.sendData(JSON.stringify(payload));
    alert('Pergunta enviada: ' + question);
    setQuestion('');
  };

  return (
    <div>
      <label htmlFor="question">Pergunta:</label>
      <input
        id="question"
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Digite sua pergunta aqui"
        style={{ display: 'block', width: '100%', marginTop: '0.5rem', padding: '0.5rem' }}
      />
      <button
        onClick={handleSubmit}
        disabled={!question.trim()}
        style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}
      >
        Enviar para alunos
      </button>
    </div>
  );
}
