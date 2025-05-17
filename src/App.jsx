import React from 'react';
import CreatePoll from "./components/CreatePool"

export default function App() {
  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Mini App de Polls</h1>
      <CreatePoll />
    </div>
  );
}