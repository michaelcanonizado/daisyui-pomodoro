import React, { FC, ReactElement } from 'react';

import { useAppSelector } from '../../../app/hooks';
import { useTimer } from '../../hooks/useTimer';

//global.d.ts
declare module 'react' {
	interface CSSProperties {
		'--value'?: string | number;
		'--size'?: string | number;
		'--thickness'?: string | number;
	}
}

const TimerRadialProgress: FC = (): ReactElement => {
	const settings = useAppSelector((state) => state.settings);
	const timerState = useAppSelector((state) => state.timer);

	const time = useTimer(settings.workDuration, timerState.isPaused);

	return (
		<>
			<div
				className="text-base-200 radial-progress absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
				style={{
					'--value': '100',
					'--size': '19.5rem',
					'--thickness': '1.5rem',
				}}
				role="progressbar"
			></div>
			<div
				className="text-accent radial-progress radial-square absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-bold text-3xl "
				style={{
					'--value':
						((settings.workDuration - time) / settings.workDuration) *
						100,
					'--size': '19.5rem',
					'--thickness': '1.5rem',
				}}
				role="progressbar"
				id="radial-progress"
			>
				<span className="text-neutral">{time} seconds</span>
			</div>
		</>
	);
};

export default TimerRadialProgress;
