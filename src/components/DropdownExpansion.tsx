import React from 'react';
import TechnologyCards from './TechnologyCards';

interface Props {
	service: any;
}

const DropdownExpansion: React.FC<Props> = ({ service }) => {
	return (
		<div>
			<img className="rounded-lg" src={service.thumbnail_path} />
			<TechnologyCards technologies={service.technologies} />

			<p className="py-4 text-sm text-justify p-5  my-4  rounded-md shadow-sm border-2 border-indigo-400">
				{service.description}
			</p>
			<a
				href="/"
				className="flex justify-center items-center w-full mx-auto p-4 rounded-full bg-indigo-600 text-white my-4 text-sm font-semibold gap-2 cursor-pointer">
				Free {service.title} Consultation
				<svg
					className=" group-focus:-translate-x-4"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M5 12H19M19 12L13 6M19 12L13 18"
						stroke="#ffffff"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>
		</div>
	);
};

export default DropdownExpansion;
