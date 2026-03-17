import { lazy, Suspense, useEffect } from 'react';
import { useProductsData } from '../../stores';
import Loading from '../../components/loading/Loading';
import CardSkeleton from '../../components/loading/CardSkeleton';
const ProductCard = lazy(() => import('./components/product-card'));

function Products() {
	const data = useProductsData((state) => state.data);

	const loading = useProductsData((state) => state.loading);
	const error = useProductsData((state) => state.error);
	const setData = useProductsData((state) => state.setData);
	const setLoading = useProductsData((state) => state.setLoading);
	const setError = useProductsData((state) => state.setError);

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
				<Loading />
			) : error === true ? (
				<h1 className="mx-auto mt-10 text-center text-3xl text-red-950">
					An Error Occuerd , Please try again Later
				</h1>
			) : (
				data.map((product, i) => (
					<Suspense key={product.id} fallback={<CardSkeleton />}>
						<ProductCard product={product} index={i} />
					</Suspense>
				))
			)}
		</div>
	);
}

export default Products;
