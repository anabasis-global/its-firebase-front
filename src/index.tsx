import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {RouterProvider} from '@vkontakte/vk-mini-apps-router'
import { App } from './App';

// axios

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <RouterProvider />
    <App name="StackBlitz" />
  </StrictMode>
);
