import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Products from './pages/products/products.jsx';
import Product from './pages/product/product.jsx';
import Cart from './pages/cart/cart.jsx';
import Header from './components/header.jsx';
import Alerts from './components/Alerts.jsx'

function App() {


	return (
		<>
			<BrowserRouter>
				<Header />
				<Alerts />
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
