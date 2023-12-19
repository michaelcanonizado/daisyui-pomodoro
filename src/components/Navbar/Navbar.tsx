import React, { FC, ReactElement } from 'react';

import { IPropClassName } from '../../interfaces/IPropClassName';

import Logo from '../Logo';
import SideBarLinks from '../SideBar/SideBarLinks';

const Navbar: FC<IPropClassName> = (props): ReactElement => {
	const { className } = props;

	return (
		<nav className={`justify-center ${className}`}>
			<div className="drawer drawer-end">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				{/* Navbar Container */}
				<div className="drawer-content flex flex-col">
					{/* Navbar Contents */}
					<div className="w-full navbar bg-base-300 flex justify-between">
						<div className="">
							<span className="text-xl">Sign Up</span>
						</div>
						<div className="">
							<Logo fontSize="2rem" />
						</div>
						<div className="flex-none lg:hidden">
							<label
								htmlFor="my-drawer-3"
								aria-label="open sidebar"
								className="btn btn-square btn-ghost"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block w-6 h-6 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</label>
						</div>
					</div>
				</div>
				{/* Navbar sidebar */}
				<div className="drawer-side hide-scrollbar">
					<label
						htmlFor="my-drawer-3"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<div className="menu min-h-full bg-base-100 p-0 ">
						<div className="w-full flex justify-end pr-4 pt-2">
							<label
								htmlFor="my-drawer-3"
								aria-label="close sidebar"
								className="drawer-overlay hover:cursor-pointer hover:bg-base-300 rounded-lg p-2 transition-colors ease-in"
							>
								<img
									className="w-8"
									src="./icons/close.svg"
									alt="close sidebar"
								></img>
							</label>
						</div>
						<SideBarLinks className="grow min-h-full pb-10" />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
