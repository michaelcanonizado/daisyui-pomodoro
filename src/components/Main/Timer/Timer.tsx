import React, { FC, ReactElement } from 'react';

import PlayIcon from './PlayIcon';
import RestartIcon from './RestartIcon';
import SkipIcon from './SkipIcon';

const Timer: FC = (): ReactElement => {
	return (
		<main className="grow shrink flex flex-col">
			<div className="h-[50px]">
				<span className="">Sign In</span>
			</div>
			<section className="m-auto">
				<div className=""></div>
				<div className="flex items-center gap-6">
					<button className="btn btn-circle btn-sm p-1 border border-neutral">
						<RestartIcon />
					</button>
					<button className="btn btn-circle p-2 border border-neutral">
						<PlayIcon />
					</button>
					<button className="btn btn-circle btn-sm p-1 border border-neutral">
						<SkipIcon />
					</button>
				</div>
				<div className=""></div>
			</section>
		</main>
	);
};

export default Timer;
