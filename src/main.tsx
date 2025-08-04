import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllOrder from './components/all-order/index.tsx';

const router = createBrowserRouter([

	{
		path: '/',
		element: <App />,
	},
	{
		path: '/all-order',
		element: <AllOrder />,
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
