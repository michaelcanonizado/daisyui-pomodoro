import React, { FC, ReactElement } from 'react';

interface IThemeSwitch {
	icon: string;
	text: string;
}

const ThemeSwitch: FC<IThemeSwitch> = (props): ReactElement => {
	const { icon, text } = props;

	return (
		<button className="py-2 pr-4 pl-20 flex items-center lg:mt-auto hover:bg-base-200 transition-colors ease-linear">
			<span className="mr-5">
				<img className="w-8" src={icon} alt={text} />
			</span>
			<div className="">
				<span className="text-base">{text}</span>
			</div>
		</button>
	);
};

export default ThemeSwitch;
