import React, { useEffect } from 'react';
import { useProductsData } from '../../stores';
import { useCartItems } from '../../stores';
import ProductCard from './components/product-card';
import { useNavigate } from 'react-router-dom';
import { useAlerts } from '../../stores';

function Products() {
	const data = useProductsData((state) => state.data);
	const loading = useProductsData((state) => state.loading);
	const error = useProductsData((state) => state.error);
	const setData = useProductsData((state) => state.setData);
	const setLoading = useProductsData((state) => state.setLoading);
	const setError = useProductsData((state) => state.setError);
	const cartItems = useCartItems((state) => state.cartItems);
	const addToCart = useCartItems((state) => state.addToCart);
	const removeFromCart = useCartItems((state) => state.removeFromCart);
	const navigate = useNavigate();
	const setUserAction = useAlerts((state) => state.setUserAction);

	function getItemFromCart(id) {
		for (let item of cartItems) if (item.id === id) return item;
	}
	function handleCartClick(id, index, inCart) {
		if (inCart === true) {
			const item = getItemFromCart(id);
			removeFromCart(item);
			setUserAction({ type: 'remove', id: Date.now() });
		} else {
			const item = data[index];
			addToCart({ ...item, quantity: 1 });
			setUserAction({ type: 'add', id: Date.now() });
		}
	}
	function handlePreviewClick(productId, index) {
		navigate(`/products/${productId}`, {
			state: { index },
		});
	}

	useEffect(() => {
		let ignore = false;
		async function fetchProducts() {
			try {
				const response = await fetch('/products.json');
				if (!response.ok) {
					setError(true);
					throw new Error('Error');
				}
				const data = await response.json();
				setData(data);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				setError(true);
				throw new Error('Error ', error);
			}
		}
		if (!ignore) fetchProducts();
		return () => {
			ignore = true;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			id="products"
			className="mb-10 grid grid-cols-(--grid) gap-x-3 gap-y-6 px-5 pt-36 sm:pt-24"
		>
			{loading === true ? (
				<h1 className="mx-auto mt-10 text-center text-3xl text-red-950">
					Loading....
				</h1>
			) : error === true ? (
				<h1 className="mx-auto mt-10 text-center text-3xl text-red-950">
					Error
				</h1>
			) : (
				data.map((product, i) => (
					<ProductCard
						key={product.id}
						handleCartClick={handleCartClick}
						handlePreviewClick={handlePreviewClick}
						index={i}
					/>
				))
			)}
		</div>
	);
}

export default Products;
