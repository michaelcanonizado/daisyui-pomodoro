import React, { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from '../components/SideBar/SideBar';
import Navbar from '../components/Navbar/Navbar';

const RootLayout: FC = (): ReactElement => {
	return (
		<div
			className="h-screen flex flex-col lg:flex-row"
			id="root-layout-breakpoint"
		>
			<SideBar className="hidden lg:flex" id="sidebar-height-breakpoint" />
			<Navbar className="flex lg:hidden" id="navbar-height-breakpoint" />
			<main className="grow">
				<Outlet />
			</main>
		</div>
	);
};
export default RootLayout;
