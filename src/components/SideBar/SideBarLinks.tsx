import React, { FC, ReactElement } from 'react';

import Link from './Link';
import ThemeSwitch from './ThemeSwitch';

import { IPropClassName } from '../../interfaces/IPropClassName';

const SideBarLinks: FC<IPropClassName> = (props): ReactElement => {
	const { className } = props;

	return (
		<ul
			className={`flex flex-col justify-center gap-8 h-full font-medium w-72 ${className}`}
		>
			<Link path="/timer" icon="./icons/timer.svg" text="Timer" />
			<Link path="/settings" icon="./icons/settings.svg" text="Settings" />
			<ThemeSwitch text="Theme" />
		</ul>
	);
};

export default SideBarLinks;
