import { create } from 'zustand';
import { persist } from 'zustand/middleware';
const useProductsData = create(
	persist(
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
	)
);

export default useProductsData;
