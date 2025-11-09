import { StoreProvider } from 'app/providers/StoreProvider';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, RouterProvider } from 'react-router';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<StoreProvider>
			<HashRouter>
				<RouterProvider router={routeConfig}></RouterProvider>
			</HashRouter>
		</StoreProvider>
	</StrictMode>
);
