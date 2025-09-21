import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useProductsData } from '../../stores';
import { useCartItems } from '../../stores';
import { useEffect } from 'react';
import { useAlerts } from '../../stores';

function Product() {
	const data = useProductsData((state) => state.data);
	const location = useLocation();
	const index = location.state.index;
	const product = data[index];
	const cartItems = useCartItems((state) => state.cartItems);
	const addToCart = useCartItems((state) => state.addToCart);
	const removeFromCart = useCartItems((state) => state.removeFromCart);
	const inCart = isInCart(product);
	const setUserAction = useAlerts((state) => state.setUserAction);

	function getItemFromCart(id) {
		for (let item of cartItems) if (item.id === id) return item;
	}
	function isInCart(product) {
		for (let item of cartItems) if (item.id === product.id) return true;
		return false;
	}
	function handleCartClick(id, inCart) {
		if (inCart === true) {
			const item = getItemFromCart(id);
			removeFromCart(item);
			setUserAction({ type: 'remove', id: '-' + String(id) });
		} else {
			addToCart({ ...product, quantity: 1 });
			setUserAction({ type: 'add', id: String(id) });
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="flex flex-wrap px-5 pt-36 sm:pt-24">
			<div className="mb-15 flex basis-full flex-col p-4 md:mb-0 md:basis-1/2">
				<div className="image flex grow-1 items-center justify-center">
					<img
						src={product.original_picture_url}
						alt=""
						className="max-w-75"
					/>
				</div>
				<ul className="sizes flex flex-wrap justify-center gap-3">
					<li className="cursor-pointer border-1 border-gray-200 px-3 py-2 text-gray-500 transition hover:bg-gray-400 hover:text-white">
						5
					</li>
					<li className="cursor-pointer border-1 border-gray-200 px-3 py-2 text-gray-500 transition hover:bg-gray-400 hover:text-white">
						6
					</li>
					<li className="cursor-pointer border-1 border-gray-200 px-3 py-2 text-gray-500 transition hover:bg-gray-400 hover:text-white">
						7
					</li>
					<li className="cursor-pointer border-1 border-gray-200 px-3 py-2 text-gray-500 transition hover:bg-gray-400 hover:text-white">
						8
					</li>
					<li className="cursor-pointer border-1 border-gray-200 px-3 py-2 text-gray-500 transition hover:bg-gray-400 hover:text-white">
						9
					</li>
					<li className="cursor-pointer border-1 border-gray-200 px-3 py-2 text-gray-500 transition hover:bg-gray-400 hover:text-white">
						10
					</li>
					<li className="cursor-pointer border-1 border-gray-200 px-3 py-2 text-gray-500 transition hover:bg-gray-400 hover:text-white">
						11
					</li>
					<li className="cursor-pointer border-1 border-gray-200 px-3 py-2 text-gray-500 transition hover:bg-gray-400 hover:text-white">
						13
					</li>
				</ul>
			</div>

			<div className="data basis-full p-4 md:basis-1/2">
				<span className="text-lg font-extralight text-gray-400 uppercase">
					{product.brand_name + ' ' + product.category}
				</span>
				<h3 className="mb-2 text-3xl font-extrabold uppercase">
					{product.name}
				</h3>
				<h5 className="mb-8 text-2xl font-bold text-gray-400">
					{product.retail_price_cents} $
				</h5>
				<p className="mb-3 text-xl/9 text-gray-900">
					{product.story_html}
				</p>
				<div className="">
					<button
						className={`${!inCart ? 'bg-black hover:bg-black/90' : 'bg-red-600 hover:bg-red-500'} me-1.5 px-6 py-3 text-xl font-light text-white uppercase transition hover:cursor-pointer`}
						onClick={() => handleCartClick(product.id, inCart)}
					>
						{!inCart ? 'add to cart' : 'remove from cart'}
					</button>
					<button className="bg-green-900 px-4 py-3 text-xl font-bold text-white transition hover:cursor-pointer hover:bg-green-800">
						<FontAwesomeIcon icon={faHeart} fill="true" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Product;
