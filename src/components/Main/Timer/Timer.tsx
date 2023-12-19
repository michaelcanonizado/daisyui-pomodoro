import React, { FC, ReactElement } from 'react';

const Timer: FC = (): ReactElement => {
	return (
		<main>
			<div className="">
				<span className="">Sign In</span>
			</div>
			<section className="">
				<div className=""></div>
				<div className="">
					<button className="btn btn-circle btn-outline">
						<img src="./icons/play.svg" alt="start timer" />
					</button>
				</div>
				<div className=""></div>
			</section>
		</main>
	);
};

export default Timer;
