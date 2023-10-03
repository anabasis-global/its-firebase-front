import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

// axios

const data = async (props) => await fetch('https:/apis.anabasis.pro/api/addresses')

//.then(Response => Response.json())

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App name={"App"} />
  </StrictMode>
);
