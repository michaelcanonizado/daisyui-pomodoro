import { useState, useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';
import TimerButtons from '../Main/Timer/TimerButtons';

/**
 *
 * @param initialTime initial countdown in seconds
 * @param callback the function that will execute when countdown has finished
 * @returns
 */

export const useCountdown = (
	initialTime: number,
	isPaused: boolean,
	callback?: () => void
) => {
	const [time, setTime] = useState(initialTime);

	useEffect(() => {
		const interval = setInterval(() => {
			if (time > 0 && !isPaused) {
				setTime((prevTime) => {
					return prevTime - 1;
				});
			}
		}, 1000);
		console.log(time);

		if (callback) {
			if (time <= 0) callback();
		}

		return () => clearInterval(interval);
	}, [time]);

	return time;
};
