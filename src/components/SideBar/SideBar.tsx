import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import SideBarLinks from './SideBarLinks';

const SideBar: FC = (): ReactElement => {
	return (
		<nav className="flex flex-col w-72 border-r-base-300 border-2">
			<div className="w-full aspect-square grid place-items-center">
				<Link
					to="https://daisyui.com/"
					className="flex justify-center mr-2"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="">
						<img
							className="w-8"
							src="./icons/daisyui.svg"
							alt="daisyUI Pomodoro"
						/>
					</div>
					<div className="mt-[4px]">
						<span className="text-2xl font-extrabold tracking-tight">
							daisyUI Pomodoro
						</span>
					</div>
				</Link>
			</div>
			<div className="h-full pb-14">
				<SideBarLinks />
			</div>
		</nav>
	);
};

export default SideBar;
