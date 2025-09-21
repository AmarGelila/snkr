import { create } from 'zustand';

const useAlerts = create((set) => ({
	userAction: '',
	setUserAction: (action) => set({ userAction: action }),
	alerts: new Array(),
	shiftAlerts: () => set((state) => ({ alerts: state.alerts.slice(1) })),
	pushAlerts: (action) =>
		set((state) => ({
			alerts: [...state.alerts, action],
		})),
}));

export default useAlerts;
