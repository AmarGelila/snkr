import { create } from 'zustand';

const useAlerts = create((set) => ({
	newAlert: null,
	setNewAlert: (alert) => set({ newAlert: alert }),
	alerts: new Array(),
	shiftAlerts: () => set((state) => ({ alerts: state.alerts.slice(1) })),
	pushAlerts: (alert) =>
		set((state) => ({
			alerts: [...state.alerts, alert],
		})),
}));

export default useAlerts;
