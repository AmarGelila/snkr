import { useCartItems } from '../../stores';
import CartItem from './components/cart-item.jsx';

function Cart() {
	const cartItems = useCartItems((state) => state.cartItems);
	const totalPrice = useCartItems((state) => state.totalPrice);
	const totalQuantity = useCartItems((state) => state.totalQuantity);
	const resetCart = useCartItems((state) => state.reset);
	if (cartItems.length === 0)
		return (
			<div className="mb-10 px-5 pt-36 sm:pt-24">
				<h1 className="mx-auto mt-50 text-center text-6xl font-black text-red-800">
					No Items
				</h1>
			</div>
		);
	else
		return (
			<div
				id="cart"
				className="mb-10 flex flex-wrap justify-center gap-3 px-5 pt-36 sm:pt-24 md:flex-nowrap"
			>
				<div className="cart-items basis-full md:basis-1/2">
					{cartItems.map((item, i) => (
						<CartItem product={item} index={i} key={item.id} />
					))}
				</div>
				<div className="data basis-full p-5 md:basis-1/2">
					<h2 className="text-3xl font-black text-gray-300 uppercase transition hover:text-gray-500">
						Total Items : {totalQuantity}
					</h2>
					<h1 className="mb-4 text-4xl font-black text-gray-500 uppercase">
						Total Price : {totalPrice}$
					</h1>
					<button
						type="button"
						className="w-full rounded-md bg-green-600 px-4 py-2 font-bold text-white uppercase transition hover:cursor-pointer hover:bg-green-700"
						onClick={resetCart}
					>
						checkout
					</button>
				</div>
			</div>
		);
}

export default Cart;

/*
	---- state does not preserve between routes
*/
