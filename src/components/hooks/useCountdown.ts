import { useState, useEffect } from 'react';

/**
 *
 * @param initialTime initial countdown in seconds
 * @param callback the function that will execute when countdown has finished
 * @returns
 */

export const useCountdown = (initialTime: number, callback?: () => void) => {
	const [time, setTime] = useState(initialTime);

	useEffect(() => {
		const interval = setInterval(() => {
			if (time > 0) {
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
