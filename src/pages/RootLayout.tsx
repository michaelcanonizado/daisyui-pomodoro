import React, { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';

import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Main/Footer/Footer';

const RootLayout: FC = (): ReactElement => {
	const theme = useAppSelector((state) => state.theme);

	return (
		<div
			className="h-screen flex flex-col lg:flex-row"
			id="root-layout-breakpoint"
			data-theme={theme.currentTheme}
		>
			<Sidebar className="hidden lg:flex" id="sidebar-height-breakpoint" />
			<Navbar className="flex lg:hidden" id="navbar-height-breakpoint" />
			<div className="grow flex flex-col">
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};
export default RootLayout;
