import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App';

const rootElement = document.getElementById('root');

// Create the root container once
// const root = createRoot(rootElement);

// // Use root.render to update the root with your app
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
