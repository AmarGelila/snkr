import Alert from './Alert.jsx';
import { useAlerts } from './stores';
import { useEffect } from 'react';
function Alerts() {
	const userAction = useAlerts((state) => state.userAction);
	const alerts = useAlerts((state) => state.alerts);
	const shiftAlerts = useAlerts((state) => state.shiftAlerts);
	const pushAlerts = useAlerts((state) => state.pushAlerts);

	useEffect(() => {
		let ignore = false;
		if (userAction !== '' && !ignore) {
			pushAlerts(userAction);
			const timeOutId = setTimeout(() => {
				shiftAlerts();
				clearTimeout(timeOutId);
			}, 300);
		}
		return () => {
			ignore = true;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userAction]);

	return (
		<div className="start-inset-0 pointer-events-none fixed top-10 z-50 w-full">
			{alerts.map((alert) => (
				<Alert type={alert.type} key={alert.id} />
			))}
		</div>
	);
}

export default Alerts;
