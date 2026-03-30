import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import AddToCartBtn from '../../../components/AddToCartBtn';
import RemoveFromCartBtn from '../../../components/RemoveFromCartBtn';
import { isInCart } from '../../../utils/utils';
import { useCartItems } from '../../../stores';
import { useInView } from 'react-intersection-observer';
import { memo } from 'react';

const ProductCard = memo(({ product, index }) => {
	const cartItems = useCartItems((state) => state.cartItems);
	const navigate = useNavigate();
	const inCart = isInCart(product.id, cartItems);
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: '200px 0px',
	});
	const handlePreviewClick = useCallback(
		(productId, index) => {
			navigate(`/products/${productId}`, {
				state: { index },
			});
		},
		[navigate]
	);

	return (
		<div ref={ref}>
			{inView && (
				<div className="relative overflow-hidden rounded-2xl border-4 border-gray-100 transition hover:cursor-pointer hover:shadow-2xl hover:shadow-red-400">
					<div className="mt-6 flex justify-center p-2">
						<img
							src={product.grid_picture_url}
							alt={product.name}
							className="w-50"
							width={200}
							height={200}
							loading="lazy"
						/>
					</div>
					<div className="mb-3 p-3">
						<h3 className="mb-1 h-14 font-bold overflow-ellipsis text-gray-900">
							{product.name}
						</h3>
						<div className="flex items-center justify-between">
							<span className="text-lg font-bold">
								{product.retail_price_cents} $
							</span>
							{inCart ? (
								<RemoveFromCartBtn id={product.id} />
							) : (
								<AddToCartBtn product={product} />
							)}
						</div>
					</div>
					<button
						className="absolute end-1.5 top-1.5 rounded-xl bg-gray-700 px-4 py-2 font-medium text-white transition hover:cursor-pointer hover:bg-gray-600"
						onClick={() => handlePreviewClick(product.id, index)}
					>
						preview
					</button>
				</div>
			)}
		</div>
	);
});

export default ProductCard;
