import { create } from 'zustand';
import { persist } from 'zustand/middleware';
const useCartItems = create(
	persist(
		(set) => ({
			cartItems: new Array(),
			totalQuantity: 0,
			totalPrice: 0,
			addToCart: (item) =>
				set((state) => ({
					totalQuantity: state.totalQuantity + 1,
					totalPrice: state.totalPrice + +item.retail_price_cents,
					cartItems: [...state.cartItems, item],
				})),
			removeFromCart: (item) =>
				set((state) => ({
					totalQuantity: state.totalQuantity - +item.quantity,
					totalPrice:
						state.totalPrice -
						item.quantity * +item.retail_price_cents,
					cartItems: state.cartItems.filter(
						(ele) => ele.id !== item.id
					),
				})),
			updateQuantity: (item, value) =>
				set((state) => ({
					totalQuantity: state.totalQuantity + value,
					totalPrice:
						state.totalPrice + value * +item.retail_price_cents,
					cartItems: state.cartItems.map((ele) =>
						ele.id === item.id
							? { ...item, quantity: value + +item.quantity }
							: ele
					),
				})),
			reset: () =>
				set({
					totalQuantity: 0,
					totalPrice: 0,
					cartItems: new Array(),
				}),
		}),
		{
			name: 'SNKR Cart Items',
		}
	)
);

export default useCartItems;
