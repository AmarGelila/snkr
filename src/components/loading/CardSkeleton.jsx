function CardSkeleton() {
	return (
		<div className="relative min-h-60 overflow-hidden rounded-2xl border-4 border-gray-100 bg-white p-2">
			{/* Image Placeholder */}
			<div className="mt-6 flex justify-center p-2">
				<div className="animate-shimmer h-40 w-40 rounded-lg bg-gray-200" />
			</div>

			<div className="mb-3 p-3">
				{/* Title Placeholder (Matching your h-14 height) */}
				<div className="mb-2 h-14 space-y-2">
					<div className="animate-shimmer h-4 w-full rounded bg-gray-200" />
					<div className="animate-shimmer h-4 w-2/3 rounded bg-gray-200" />
				</div>

				{/* Price & Button Placeholder */}
				<div className="flex items-center justify-between">
					<div className="animate-shimmer h-6 w-16 rounded bg-gray-200" />
					<div className="animate-shimmer h-10 w-24 rounded-lg bg-gray-200" />
				</div>
			</div>

			{/* Preview Button Placeholder */}
			<div className="animate-shimmer absolute end-1.5 top-1.5 h-10 w-20 rounded-xl bg-gray-200" />
		</div>
	);
}
export default CardSkeleton;
