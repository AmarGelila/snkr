import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons/faAnglesRight';
import { useNavigate } from 'react-router-dom';
function Home() {
	const navigate = useNavigate();
	return (
		<div
			id="hero"
			className="relative h-screen overflow-clip bg-gray-200 px-5 pt-28 sm:pt-16"
		>
			<h1 className="absolute top-6/12 left-1/2 z-9 w-full -translate-6/12 text-center text-9xl font-black tracking-[.3em] text-gray-50 uppercase hover:text-gray-400">
				air max
			</h1>
			<img
				src="../../../public/hero-img.png"
				alt="Shoes Hero Image"
				className="absolute top-6/12 left-1/2 z-10 mt-28 h-5/6 max-w-full -translate-6/12 sm:mt-16"
			/>
			<hr className="absolute top-6/12 left-1/2 z-8 w-full -translate-6/12 border-6 border-gray-300 shadow-sm shadow-red-200/90" />
			<button
				type="button"
				className="animate-right absolute right-0 bottom-1/12 z-11 -translate-6/12 rounded-md border-2 bg-black p-2 text-white uppercase transition-all hover:cursor-pointer hover:bg-black/90"
				onClick={() => navigate('/products')}
			>
				shop now
				<span>
					<FontAwesomeIcon icon={faAnglesRight} />
				</span>
			</button>
		</div>
	);
}

export default Home;
