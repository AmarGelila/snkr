import { create } from 'zustand';
const useProductsData = create(
	(set) => ({
		data: [],
		loading: true,
		error: false,
		setData: (value) => set({ data: value }),
		setLoading: (value) => set({ loading: value }),
		setError: (value) => set({ error: value }),
	}),
	{
		name: 'SNKR data',
	}
);

export default useProductsData;
