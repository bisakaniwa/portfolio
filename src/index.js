import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootId = document.getElementById('root');
const rootNode = createRoot(rootId);

rootNode.render(<App />);