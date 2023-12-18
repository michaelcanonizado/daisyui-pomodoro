import React, { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from '../components/SideBar/SideBar';

const RootLayout: FC = (): ReactElement => {
	return (
		<div className="">
			<SideBar />
			<main className="">
				<Outlet />
			</main>
		</div>
	);
};
export default RootLayout;
