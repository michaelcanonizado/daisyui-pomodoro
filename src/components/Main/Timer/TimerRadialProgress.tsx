import { FC, ReactElement } from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
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
	const timer = useAppSelector((state) => state.timer);

	const { time } = useTimer(timer.settings.workDuration);

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
						((timer.settings.workDuration - time) /
							timer.settings.workDuration) *
						100,
					'--size': '19.5rem',
					'--thickness': '1.5rem',
				}}
				role="progressbar"
				id="radial-progress"
			>
				<span className="text-base-content">{time} seconds</span>
			</div>
		</>
	);
};

export default TimerRadialProgress;
