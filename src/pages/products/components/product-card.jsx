import { useProductsData } from '../../../stores';
import { useCartItems } from '../../../stores';

export default function ProductCard({
	handleCartClick,
	handlePreviewClick,
	index,
}) {
	function isInCart(product) {
		for (let item of cartItems) if (item.id === product.id) return true;
		return false;
	}

	const productData = useProductsData((state) => state.data)[index];
	const cartItems = useCartItems((state) => state.cartItems);
	const inCart = isInCart(productData);
	return (
		<div className="relative overflow-hidden rounded-2xl border-4 border-gray-100 transition hover:cursor-pointer hover:shadow-2xl hover:shadow-red-400">
			<div className="mt-6 flex justify-center p-2">
				<img
					src={productData.grid_picture_url}
					alt="product image"
					className="w-50"
				/>
			</div>
			<div className="mb-3 p-3">
				<h3 className="mb-1 h-14 font-bold overflow-ellipsis text-gray-900">
					{productData.name}
				</h3>
				<div className="flex items-center justify-between">
					<span className="text-lg font-bold">
						{productData.retail_price_cents} $
					</span>
					<button
						type="button"
						className={`rounded-md ${!inCart ? 'bg-black hover:bg-black/90' : 'bg-red-600 hover:bg-red-500'} p-2 font-medium text-white uppercase transition-all hover:cursor-pointer`}
						onClick={() =>
							handleCartClick(productData.id, index, inCart)
						}
					>
						{!inCart ? 'add to cart' : 'remove from cart'}
					</button>
				</div>
			</div>
			<button
				className="absolute end-1.5 top-1.5 rounded-xl bg-gray-700 px-4 py-2 font-medium text-white transition hover:bg-gray-600"
				onClick={() => handlePreviewClick(productData.id, index)}
			>
				preview
			</button>
		</div>
	);
}
