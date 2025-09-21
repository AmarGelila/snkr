import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { useCartItems } from '../stores';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
	const [currentRoute, setCurrentRoute] = useState('/');
	const totalQuantity = useCartItems((state) => state.totalQuantity);
	useEffect(() => {
		setCurrentRoute(location.pathname);
	}, []);

	return (
		<header className="fixed z-50 w-full bg-white shadow-lg shadow-red-300/80">
			<div className="px-4">
				<ul className="flex flex-wrap items-center justify-center gap-3">
					<li className="me-0 basis-full px-3 pt-5 pb-0 sm:me-auto sm:basis-auto sm:pt-3 sm:pb-3">
						<Link to="/" className="flex justify-center sm:inline">
							<img src="/header-logo.svg" alt="Website Logo" />
						</Link>
					</li>
					<li className="p-3 uppercase">
						<Link to="/">home</Link>
					</li>
					<li className="p-3 uppercase">
						<Link to="/products">products</Link>
					</li>
					<li className="p-3 uppercase">
						<Link to="/cart" className="relative text-2xl">
							<span
								className={`absolute ${currentRoute === '/cart' || totalQuantity === 0 ? 'hidden' : ''} start-8/10 top-1/4 flex h-7 w-7 -translate-1/2 items-center justify-center ${totalQuantity !== 0 ? 'animate-bounce' : ''} rounded-full bg-red-600 p-2 text-white`}
							>
								{totalQuantity}
							</span>
							<FontAwesomeIcon icon={faCartShopping} />
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
