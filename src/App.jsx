import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alerts from './components/Alerts.jsx';
import Header from './components/header.jsx';
import Loading from './components/loading/Loading.jsx';
const Home = lazy(() => import('./pages/home/home.jsx'));
const Products = lazy(() => import('./pages/products/products.jsx'));
const Product = lazy(() => import('./pages/product/product.jsx'));
const Cart = lazy(() => import('./pages/cart/cart.jsx'));

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Alerts />
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/products" element={<Products />}></Route>
						<Route
							path="/products/:productId"
							element={<Product />}
						></Route>
						<Route path="/cart" element={<Cart />}></Route>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	);
}

export default App;
