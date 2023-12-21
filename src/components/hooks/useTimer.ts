import { useState, useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';
import { timerAction } from '../Main/Timer/timerSlice';

/**
 *
 * @param initialTime initial countdown in seconds
 * @param isPaused boolean timer state, if timer is paused or not
 * @returns
 */

export const useTimer = (initialTime: number, isPaused: boolean) => {
	const dispatch = useAppDispatch();

	const [time, setTime] = useState(initialTime);

	useEffect(() => {
		let interval: ReturnType<typeof setInterval>;

		if (!isPaused && time > 0) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000);
		}

		return () => clearInterval(interval);
	}, [time, isPaused]);

	return time;
};
