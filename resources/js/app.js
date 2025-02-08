import React from 'react';
import { createRoot } from 'react-dom/client';
import GreenCarboHome from '@/Components/GreenCarboHome'; // Utilisation de l'alias
import axios from 'axios';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <React.StrictMode>
      <GreenCarboHome />
    </React.StrictMode>
  );

axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');