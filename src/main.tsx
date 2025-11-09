import { StoreProvider } from 'app/providers/StoreProvider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const router = createHashRouter(routeConfig);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<StoreProvider>
			<RouterProvider router={router}></RouterProvider>
		</StoreProvider>
	</StrictMode>
);
