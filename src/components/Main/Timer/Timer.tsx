import React, { FC, ReactElement } from 'react';

import TimerButtons from './TimerButtons';

//global.d.ts
declare module 'react' {
	interface CSSProperties {
		'--value'?: string | number;
		'--size'?: string | number;
		'--thickness'?: string | number;
	}
}

const Timer: FC = (): ReactElement => {
	return (
		<main className="grow shrink flex flex-col">
			<div className="h-[50px]">
				<span className="">Sign In</span>
			</div>
			<section className="grow flex flex-col items-center justify-center">
				<div className="h-[330px] w-[350px] relative">
					<div
						className="radial-progress text-base-200 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
						style={{
							'--value': '100',
							'--size': '12rem',
							'--thickness': '1.5rem',
						}}
						role="progressbar"
					></div>
					<div
						className="radial-progress absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
						style={{
							'--value': '70',
							'--size': '12rem',
							'--thickness': '1.5rem',
						}}
						role="progressbar"
					>
						70%
					</div>
					<TimerButtons />
				</div>
				<div className=""></div>
			</section>
		</main>
	);
};

export default Timer;
