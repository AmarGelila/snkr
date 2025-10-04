import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { useCartItems } from '../../../stores';
import { useAlerts } from '../../../stores';

function CartItem({ product }) {
	const updateQuantity = useCartItems((state) => state.updateQuantity);
	const removeFromCart = useCartItems((state) => state.removeFromCart);
	const setUserAction = useAlerts((state) => state.setUserAction);

	return (
		<div className="product transiation mb-5 overflow-hidden rounded-2xl border-4 border-gray-100 transition hover:cursor-pointer hover:shadow-lg hover:shadow-red-400/90">
			<div className="mt-6 flex justify-center p-2">
				<img
					src={product.main_picture_url}
					alt={product.name}
					className="w-50"
				/>
			</div>
			<div className="mb-3 p-3">
				<p className="mb-3 text-xl/9 text-gray-900">
					{product.story_html}
				</p>
				<div className="flex items-center justify-around">
					<span className="text-lg font-bold">
						{product.retail_price_cents}$
					</span>
					<div className="actions">
						<button
							type="button"
							className="transiation mx-2 rounded-lg bg-gray-200 px-3 py-1 text-xl font-black hover:cursor-pointer hover:bg-gray-300"
							onClick={() =>
								product.quantity !== 10
									? updateQuantity(product, 1)
									: null
							}
						>
							+
						</button>
						<span className="mx-3 text-lg">{product.quantity}</span>
						<button
							type="button"
							className="transiation mx-2 rounded-lg bg-gray-200 px-3 py-1 text-xl font-black hover:cursor-pointer hover:bg-gray-300"
							onClick={() =>
								product.quantity !== 1
									? updateQuantity(product, -1)
									: null
							}
						>
							-
						</button>
						<button
							type="button"
							className="ms-3 rounded-full bg-red-200 p-2 text-red-900 transition hover:cursor-pointer hover:bg-red-500"
							onClick={() => {
								removeFromCart(product);
								setUserAction({
									type: 'remove',
									id: Date.now(),
								});
							}}
						>
							<FontAwesomeIcon icon={faTrash} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
