import React, { FC, ReactElement } from 'react';

import TimerRadialProgress from './TimerRadialProgress';
import TimerButtons from './TimerButtons';

const Timer: FC = (): ReactElement => {
	return (
		<main className="grow shrink flex flex-col">
			<div className="h-[50px]">
				<span className="">Sign In</span>
			</div>
			<section className="grow flex flex-col items-center justify-center">
				<div className="h-[450px] w-[350px] relative">
					<TimerRadialProgress />
					<TimerButtons />
				</div>
				<div className=""></div>
			</section>
		</main>
	);
};

export default Timer;
