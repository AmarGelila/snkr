import { useAlerts } from '../stores';
import { useCartItems } from '../stores';
import { useCallback } from 'react';

function AddToCartBtn({ product }) {
	const addToCart = useCartItems((state) => state.addToCart);
	const setNewAlert = useAlerts((state) => state.setNewAlert);

	const handleCartClick = useCallback(
		(key) => {
			addToCart({ ...product, quantity: 1 });
			setNewAlert({
				key: key,
				type: 'add',
				text: product.name.slice(0, 15) + ' ',
			});
		},
		[addToCart, product, setNewAlert]
	);

	return (
		<button
			type="button"
			className="rounded-md bg-black p-2 font-medium text-white uppercase transition-all hover:cursor-pointer hover:bg-black/90"
			onClick={() => handleCartClick(Date.now())}
		>
			add to cart
		</button>
	);
}

export default AddToCartBtn;
