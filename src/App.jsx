import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Products from './pages/products/products.jsx';
import Product from './pages/product/product.jsx';
import Cart from './pages/cart/cart.jsx';
import Header from './components/header.jsx';
import Alert from './components/Alert.jsx';
import { useAlerts } from './stores';
import { useEffect } from 'react';

function App() {
	const userAction = useAlerts((state) => state.userAction);
	const alerts = useAlerts((state) => state.alerts);
	const shiftAlerts = useAlerts((state) => state.shiftAlerts);
	const pushAlerts = useAlerts((state) => state.pushAlerts);

	useEffect(() => {
		let ignore = false;
		if (userAction !== '' && !ignore) {
			pushAlerts(userAction);
			setTimeout(() => {
				shiftAlerts();
			}, 7000);
		}
		return () => (ignore = true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userAction]);

	return (
		<>
			<BrowserRouter>
				<Header />
				<div className="alerts start-inset-0 pointer-events-none fixed top-0 z-50 w-full">
					{alerts.map((alert) => (
						<Alert type={alert.type} key={alert.id} />
					))}
				</div>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/products" element={<Products />}></Route>
					<Route
						path="/products/:productId"
						element={<Product />}
					></Route>
					<Route path="/cart" element={<Cart />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
