import React, { FC, ReactElement } from 'react';

import { Link } from 'react-router-dom';

interface ILogo {
	fontSizeClass: string;
}

const Logo: FC<ILogo> = (props): ReactElement => {
	const { fontSizeClass } = props;

	return (
		<Link
			to="https://daisyui.com/"
			className={`flex justify-center items-end lg:mr-2 ${fontSizeClass}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="">
				<img
					className="w-[1.35em]"
					src="./icons/daisyui.svg"
					alt="daisyUI Pomodoro"
				/>
			</div>
			<div className="">
				<span className="font-extrabold tracking-tight">
					daisyUI Pomodoro
				</span>
			</div>
		</Link>
	);
};

export default Logo;
