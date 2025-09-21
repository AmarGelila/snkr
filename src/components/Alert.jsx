import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
function Alert({ type }) {
	return (
		<div className="text-bold animate-pop mx-auto mb-5 flex w-fit items-center justify-center rounded-xl bg-white px-10 py-3 text-green-600 shadow-2xl shadow-red-900/90">
			{type === 'add' ? (
				<>
					<span className="rounded-full bg-green-600 p-1 font-black text-white">
						<FontAwesomeIcon icon={faCheck} />
					</span>
					<h3 className="ms-3 capitalize">Product Added To Cart</h3>
				</>
			) : (
				<>
					<span className="rounded-full bg-red-600 p-1 font-black text-white">
						<FontAwesomeIcon icon={faRemove} />
					</span>
					<h3 className="ms-3 capitalize">
						Product Removed From Cart
					</h3>
				</>
			)}
		</div>
	);
}

export default Alert;
/* 
	---- click
		---- arr.push(1)
		---- setTimeOUt(arr.pop,3000)
		---- map(arr) to <Alert type="ADD|remove">
*/
