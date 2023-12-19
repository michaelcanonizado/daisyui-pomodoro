import React, { FC, ReactElement } from 'react';

import { useCountdown } from '../../hooks/useCountdown';

import TimerButtons from './TimerButtons';

//global.d.ts
declare module 'react' {
	interface CSSProperties {
		'--value'?: string | number;
		'--size'?: string | number;
		'--thickness'?: string | number;
	}
}

interface IUserTimterSettings {
	workDuration: number;
	shortBreakDuration: number;
	longBreakDuration: number;
	rounds: number;
}

const settings: IUserTimterSettings = {
	workDuration: 10,
	shortBreakDuration: 30,
	longBreakDuration: 45,
	rounds: 4,
};

const Timer: FC = (): ReactElement => {
	const time = useCountdown(settings.workDuration, () =>
		console.log('Timer Done')
	);

	return (
		<main className="grow shrink flex flex-col">
			<div className="h-[50px]">
				<span className="">Sign In</span>
			</div>
			<section className="grow flex flex-col items-center justify-center">
				<div className="h-[450px] w-[350px] relative">
					<div
						className="radial-progress text-base-200 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
						style={{
							'--value': '100',
							'--size': '19.5rem',
							'--thickness': '1.5rem',
						}}
						role="progressbar"
					></div>
					<div
						className="radial-progress radial-square absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-bold text-3xl"
						style={{
							'--value':
								((settings.workDuration - time) /
									settings.workDuration) *
								100,
							'--size': '19.5rem',
							'--thickness': '1.5rem',
						}}
						role="progressbar"
						id="radial-progress"
					>
						{time} seconds
					</div>
					<TimerButtons />
				</div>
				<div className=""></div>
			</section>
		</main>
	);
};

export default Timer;
