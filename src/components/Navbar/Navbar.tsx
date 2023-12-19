import React, { FC, ReactElement } from 'react';

import { IPropClassName } from '../../interfaces/IPropClassName';

import Logo from './../Logo/Logo';

const Navbar: FC<IPropClassName> = (props): ReactElement => {
	const { className } = props;

	return (
		<nav className={`justify-center ${className}`}>
			<div className=""></div>
			<div className="">
				<Logo fontSize="1.5rem" />
			</div>
			<div className=""></div>
		</nav>
	);
};

export default Navbar;
