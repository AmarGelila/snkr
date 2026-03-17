export function isInCart(id, cartItems) {
	return cartItems.findIndex((cartItem) => cartItem.id === id) !== -1;
}

export function getItemFromCart(id, cartItems) {
	for (let item of cartItems) if (item.id === id) return item;
}
