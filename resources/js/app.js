import React from 'react';
import { createRoot } from 'react-dom/client';
import GreenCarboHome from '@/Components/GreenCarboHome'; // Utilisation de l'alias

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <React.StrictMode>
      <GreenCarboHome />
    </React.StrictMode>
  );