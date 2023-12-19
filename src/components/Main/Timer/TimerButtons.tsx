import React from 'react';

import PlayIcon from './PlayIcon';
import RestartIcon from './RestartIcon';
import SkipIcon from './SkipIcon';

const TimerButtons = () => {
	return (
		<div className="flex items-center gap-6 absolute bottom-0 right-1/2 translate-x-[50%]">
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
	);
};

export default TimerButtons;
