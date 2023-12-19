import React, { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from '../components/SideBar/SideBar';
import Navbar from '../components/Navbar/Navbar';

const RootLayout: FC = (): ReactElement => {
	return (
		<div className="h-screen flex">
			<SideBar className="hidden lg:flex" />
			<Navbar className="flex lg:hidden" />
			<main>
				<Outlet />
			</main>
		</div>
	);
};
export default RootLayout;
