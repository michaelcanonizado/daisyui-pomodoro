import React, { FC, ReactElement } from 'react';

import DownArrowIcon from './DownArrowIcon';

interface IThemeSwitch {
	icon: string;
	text: string;
}

const ThemeSwitch: FC<IThemeSwitch> = (props): ReactElement => {
	const { icon, text } = props;

	return (
		<>
			<button
				className="flex mx-auto lg:mt-auto"
				id="theme-switcher-breakpoint"
			>
				<div className="dropdown dropdown-top dropdown-center">
					<div
						tabIndex={0}
						role="button"
						className="btn m-1 bg-base-100 hover:bg-base-200 border-0 ring-0 outline-0"
					>
						<span className="mr-5">
							<DownArrowIcon />
						</span>
						<div className="">
							<span className="text-base">{text}</span>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<a>Item 2</a>
						</li>
					</ul>
				</div>
			</button>
		</>
	);
};

export default ThemeSwitch;
