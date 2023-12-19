import React, { FC, ReactElement } from 'react';

import Link from './Link';
import ThemeSwitch from './ThemeSwitch';

const SideBarLinks: FC = (): ReactElement => {
	return (
		<ul className="flex flex-col h-full font-medium">
			<Link path="/timer" icon="./icons/timer.svg" text="Timer" />
			<Link path="/settings" icon="./icons/settings.svg" text="Settings" />
			<ThemeSwitch icon="./icons/sun.svg" text="Light mode" />
			{/* <ThemeSwitch icon="./icons/moon.svg" text="Dark mode" /> */}
		</ul>
	);
};

export default SideBarLinks;
