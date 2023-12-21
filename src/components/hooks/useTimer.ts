import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { timerAction } from '../Main/Timer/timerSlice';

/**
 *
 * @param initialTime initial countdown in seconds
 * @returns the remaining time
 */

export const useTimer = (initialTime: number) => {
	const dispatch = useAppDispatch();
	const isTimerRunning = useAppSelector((state) => state.timer.isRunning);
	const timerValue = useAppSelector((state) => state.timer.currentTime);

	useEffect(() => {
		let interval: ReturnType<typeof setInterval>;

		if (isTimerRunning) {
			interval = setInterval(() => {
				dispatch(timerAction.decrementTime());
			}, 1000);
		}

		return () => {
			clearInterval(interval);
		};
	}, [timerValue, isTimerRunning, dispatch]);

	return {
		time: timerValue,
	};
};
