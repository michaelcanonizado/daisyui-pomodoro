import React, { FC, ReactElement } from 'react';

import TimerButtons from './TimerButtons';

const Timer: FC = (): ReactElement => {
	return (
		<main className="grow shrink flex flex-col">
			<div className="h-[50px]">
				<span className="">Sign In</span>
			</div>
			<section className="m-auto">
				<div className=""></div>
				<TimerButtons />
				<div className=""></div>
			</section>
		</main>
	);
};

export default Timer;
