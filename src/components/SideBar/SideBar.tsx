import React, { FC, ReactElement } from 'react';

import SidebarLinks from './SidebarLinks';

import { IPropClassName } from '../../interfaces/IPropClassName';

import Logo from '../Logo';

interface ISideBar extends IPropClassName {
	id?: string;
}

const SideBar: FC<ISideBar> = (props): ReactElement => {
	const { className, id } = props;

	return (
		<nav
			className={`flex-col border-r-base-300 border-r-2 ${className}`}
			id={id}
		>
			<div className="w-full aspect-square grid place-items-center">
				<Logo fontSizeClass="text-[1.5rem]" />
			</div>
			<div className="h-full pb-14">
				<SidebarLinks />
			</div>
		</nav>
	);
};

export default SideBar;
