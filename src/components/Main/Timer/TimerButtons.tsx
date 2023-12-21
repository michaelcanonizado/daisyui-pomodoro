import React from 'react';

import PlayIcon from './PlayIcon';
import PauseIcon from './PauseIcon';
import RestartIcon from './RestartIcon';
import SkipIcon from './SkipIcon';

import { useAppDispatch } from '../../../app/hooks';
import { timerButtonsAction } from './timerButtonsSlice';

const TimerButtons = () => {
	const dispatch = useAppDispatch();

	const onToggleTimerHandler = () => {
		dispatch(timerButtonsAction.toggleTimer());
	};

	return (
		<div className="flex items-center gap-6 absolute bottom-0 right-1/2 translate-x-[50%]">
			<button className="btn btn-circle btn-sm p-1 border border-neutral">
				<RestartIcon />
			</button>
			<button className="btn btn-circle border border-neutral">
				<label className="swap swap-rotate">
					<input type="checkbox" onClick={onToggleTimerHandler} />
					<PauseIcon className="swap-on fill-current w-8 h-8" />
					<PlayIcon className="swap-off fill-current w-8 h-8" />
				</label>
			</button>
			<button className="btn btn-circle btn-sm p-1 border border-neutral">
				<SkipIcon />
			</button>
		</div>
	);
};

export default TimerButtons;
