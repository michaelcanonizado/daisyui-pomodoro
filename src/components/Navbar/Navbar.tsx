import React, { FC, ReactElement } from 'react';

import { IPropClassName } from '../../interfaces/IPropClassName';

const Navbar: FC<IPropClassName> = (props): ReactElement => {
	const { className } = props;

	return <nav className={` ${className}`}>Navbar</nav>;
};

export default Navbar;
