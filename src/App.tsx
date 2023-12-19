import React, { FC, ReactElement } from 'react';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';

import Timer from './pages/Timer';
import Settings from './pages/Settings';
import RootLayout from './pages/RootLayout';

const router = createHashRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <Navigate to="/timer" /> },
			// { path: 'timer', element: <Timer /> },
			// { path: 'settings', element: <Settings /> },
			{ path: 'timer', element: <Timer /> },
			{ path: 'settings', element: <Settings /> },
		],
	},
]);

const App: FC = (): ReactElement => {
	return <RouterProvider router={router} />;
};

export default App;
