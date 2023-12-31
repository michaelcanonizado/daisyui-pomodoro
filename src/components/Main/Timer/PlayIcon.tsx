import React, { FC, ReactElement } from 'react';

import { IPropClassName } from '../../../interfaces/IPropClassName';

const PlayIcon: FC<IPropClassName> = (props): ReactElement => {
	const { className } = props;

	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			focusable="false"
			viewBox="0 0 24 24"
			aria-hidden="true"
			fill="currentColor"
		>
			<path d="M8 5v14l11-7z" />
		</svg>
	);
};

export default PlayIcon;
