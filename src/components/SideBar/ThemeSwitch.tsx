import React, { FC, ReactElement } from 'react';

import DownArrowIcon from './DownArrowIcon';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { themesAction } from './themeSlice';

interface IThemeSwitch {
	text: string;
}

const ThemeSwitch: FC<IThemeSwitch> = (props): ReactElement => {
	const { text } = props;

	const dispatch = useAppDispatch();
	const theme = useAppSelector((state) => state.theme);

	const onChangeThemeHandler = (event: React.MouseEvent<HTMLElement>) => {
		const selectedTheme = event.currentTarget.dataset.value;
		dispatch(themesAction.setTheme({ theme: selectedTheme }));
	};

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
						className="bg-base-200 dropdown-content z-[1] menu shadow rounded-box grid grid-cols-1 gap-3 p-4
						
						w-[224px] h-[300px] overflow-y-scroll"
					>
						{theme.themes.map((theme) => {
							return (
								<li
									onClick={onChangeThemeHandler}
									data-value={theme}
								>
									<div
										className="hover:bg-base-100 col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
										data-theme={theme}
									>
										<div className="flex-grow">
											<span className="text-sm">{theme}</span>
										</div>
										<div className="grid grid-cols-4 w-[33%] h-full shrink-0 flex-wrap gap-1">
											<span className="rounded-badge bg-primary w-full h-full"></span>
											<span className="rounded-badge bg-secondary w-full h-full"></span>
											<span className="rounded-badge bg-accent w-full h-full"></span>
											<span className="rounded-badge bg-neutral w-full h-full"></span>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</button>
		</>
	);
};

export default ThemeSwitch;
