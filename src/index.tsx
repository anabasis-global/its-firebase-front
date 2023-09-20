import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

import { RouterProvider, createHashRouter,useActiveVkuiLocation, useParams } from '@vkontakte/vk-mini-apps-router';
// axios

import axios from 'axios'

const data = axios.get('https:/apis.anabasis.pro/api/addresses').then(Response => Response.data)




const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App name="StackBlitz" />
  </StrictMode>
);
