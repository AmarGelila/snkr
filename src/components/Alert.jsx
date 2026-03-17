import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
function Alert({ type, text }) {
	return (
		<div className="text-bold animate-alert mx-auto mb-5 flex w-fit items-center rounded-xl bg-white px-10 py-3 text-green-600 shadow-lg shadow-red-300/80">
			{type === 'add' ? (
				<>
					<span className="flex items-center justify-center rounded-full bg-green-600 p-1 font-black text-white">
						<FontAwesomeIcon
							icon={faCheck}
							style={{ width: '15px', height: '15px' }}
						/>
					</span>
					<h3 className="ms-3 capitalize">{text} Added</h3>
				</>
			) : (
				<>
					<span className="flex items-center justify-center rounded-full bg-red-600 p-1 font-black text-white">
						<FontAwesomeIcon
							icon={faRemove}
							style={{ width: '15px', height: '15px' }}
						/>
					</span>
					<h3 className="ms-3 capitalize">{text} Removed</h3>
				</>
			)}
		</div>
	);
}

export default Alert;
