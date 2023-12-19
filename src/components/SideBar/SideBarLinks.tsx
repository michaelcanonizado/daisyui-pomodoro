import React, { FC, ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

const SideBarLinks: FC = (props): ReactElement => {
	return (
		<ul className="bg-red-400 flex flex-col h-full">
			<li className="">
				<NavLink className="" to="/">
					<span className="">X</span>
					<span className="">Timer</span>
				</NavLink>
			</li>
			<li className="">
				<NavLink className="" to="/">
					<span className="">X</span>
					<span className="">Settings</span>
				</NavLink>
			</li>
			<li className="mt-[auto]">
				<button className="">
					<span className="">X</span>
					<span className="">Light Mode</span>
				</button>
			</li>
		</ul>
	);
};

export default SideBarLinks;
