import React, { FC, ReactElement } from 'react';

import { IPropClassName } from '../../../interfaces/IPropClassName';

const PauseIcon: FC<IPropClassName> = (props): ReactElement => {
	const { className } = props;

	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			focusable="false"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
		</svg>
	);
};

export default PauseIcon;
