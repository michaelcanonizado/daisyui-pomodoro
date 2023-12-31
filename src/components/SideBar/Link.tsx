import React, { FC, ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

interface INavLink {
	icon: string;
	text: string;
	path: string;
}

const Link: FC<INavLink> = (props): ReactElement => {
	const { icon, text, path } = props;

	return (
		<NavLink
			className="py-2 pl-20  flex hover:bg-base-200 transition-colors ease-linear"
			to={path}
		>
			<span className="mr-5">
				<img className="w-7" src={`${icon}`} alt={text} />
			</span>
			<div className="flex items-center grow">
				<span className="text-base">{text}</span>
			</div>
		</NavLink>
	);
};

export default Link;
