import { useCartItems } from '../stores';
import { useAlerts } from '../stores';
import { useCallback } from 'react';
import { getItemFromCart } from '../utils/utils';

function RemoveFromCartBtn({ id }) {
	const cartItems = useCartItems((state) => state.cartItems);
	const removeFromCart = useCartItems((state) => state.removeFromCart);
	const setNewAlert = useAlerts((state) => state.setNewAlert);

	const handleCartClick = useCallback(
		(key) => {
			const item = getItemFromCart(id, cartItems);
			removeFromCart(item);
			setNewAlert({
				key: key,
				type: 'remove',
				text: item.name.slice(0, 15) + ' ',
			});
		},
		[cartItems, id, removeFromCart, setNewAlert]
	);

	return (
		<button
			type="button"
			className="rounded-md bg-red-600 p-2 font-medium text-white uppercase transition-all hover:cursor-pointer hover:bg-red-500"
			onClick={() => handleCartClick(Date.now())}
		>
			remove from cart
		</button>
	);
}

export default RemoveFromCartBtn;
