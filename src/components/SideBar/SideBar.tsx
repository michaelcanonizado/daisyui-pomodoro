import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import SideBarLinks from './SideBarLinks';

const SideBar: FC = (): ReactElement => {
	return (
		<nav className="flex flex-col w-64 border-r-base-300 border-2">
			<div className="w-full aspect-square">
				<Link to="/" />
			</div>
			<div className="h-full pb-14">
				<SideBarLinks />
			</div>
		</nav>
	);
};

export default SideBar;
