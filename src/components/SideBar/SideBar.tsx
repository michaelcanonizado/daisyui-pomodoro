import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import SideBarLinks from './SideBarLinks';

const SideBar: FC = (): ReactElement => {
	return (
		<nav className="bg-base-200 flex flex-col">
			<div className="w-full aspect-square bg-primary">
				<Link to="/" />
			</div>
			<div className="h-full">
				<SideBarLinks />
			</div>
		</nav>
	);
};

export default SideBar;
