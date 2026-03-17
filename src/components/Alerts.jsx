import Alert from './Alert.jsx';
import { useAlerts } from '../stores';
import { useEffect } from 'react';
function Alerts() {
	const newAlert = useAlerts((state) => state.newAlert);
	const alerts = useAlerts((state) => state.alerts);
	const shiftAlerts = useAlerts((state) => state.shiftAlerts);
	const pushAlerts = useAlerts((state) => state.pushAlerts);

	useEffect(() => {
		if (newAlert !== null) {
			pushAlerts(newAlert);
			const timeOutId = setTimeout(() => {
				shiftAlerts();
				clearTimeout(timeOutId);
			}, 3000);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [newAlert]);

	return (
		<div className="pointer-events-none fixed top-10 right-0 z-50 w-1/3">
			<ul className="flex list-none flex-col items-end justify-end p-3">
				{alerts.map((alert) => (
					<li key={alert.key}>
						<Alert type={alert.type} text={alert.text} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default Alerts;
