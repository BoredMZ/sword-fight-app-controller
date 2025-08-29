import React from 'react';

const actions = [
  { label: 'Attack', value: 'attack' },
  { label: 'Block', value: 'block' },
  { label: 'Dodge', value: 'dodge' },
];

const sendAction = (action) => {
  // TODO: Replace with WebSocket send logic
  alert(`Sent action: ${action}`);
};

const Controller = () => (
  <div style={{ textAlign: 'center', marginTop: 40 }}>
    <h2>Sword Fight Controller</h2>
    {actions.map(({ label, value }) => (
      <button
        key={value}
        style={{ fontSize: 24, margin: 16, padding: '16px 32px' }}
        onClick={() => sendAction(value)}
      >
        {label}
      </button>
    ))}
  </div>
);

export default Controller;
