import React, { FC, ReactElement } from 'react';

import PlayIcon from './PlayIcon';
import RestartIcon from './RestartIcon';
import SkipIcon from './SkipIcon';

const Timer: FC = (): ReactElement => {
	return (
		<main>
			<div className="">
				<span className="">Sign In</span>
			</div>
			<section className="">
				<div className=""></div>
				<div className="">
					<button className="btn btn-circle btn-outline btn-sm">
						<RestartIcon />
					</button>
					<button className="btn btn-circle btn-outline btn-sm">
						<PlayIcon />
					</button>
					<button className="btn btn-circle btn-outline btn-sm">
						<SkipIcon />
					</button>
				</div>
				<div className=""></div>
			</section>
		</main>
	);
};

export default Timer;
