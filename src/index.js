import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

setInterval(() => {
  const element = (
    <div>
      <h1>Bonjour de Dyma</h1>
      <h2>
        Il est exactement {new Date().toLocaleTimeString()} pour ce nouvel
        élément unique.
      </h2>
    </div>
  );
  root.render(element);
}, 1000);
