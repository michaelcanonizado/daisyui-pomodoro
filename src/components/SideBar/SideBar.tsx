import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import SideBarLinks from './SideBarLinks';

import { IPropClassName } from './../../interfaces/IPropClassName';

import Logo from '../Logo';

const SideBar: FC<IPropClassName> = (props): ReactElement => {
	const { className } = props;

	return (
		<nav className={`flex-col border-r-base-300 border-2 ${className}`}>
			<div className="w-full aspect-square grid place-items-center">
				<Logo fontSize="1.5rem" />
			</div>
			<div className="h-full pb-14">
				<SideBarLinks />
			</div>
		</nav>
	);
};

export default SideBar;
