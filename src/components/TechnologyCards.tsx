import React from 'react';

interface Props {
	technologies: any;
}

const TechnologyCards: React.FC<Props> = ({ technologies }) => {
	return (
		<div className="flex flex-wrap justify-around my-4">
			{technologies?.map((item) => (
				<div
					title={item.name}
					className=" h-12 flex flex-col justify-center w-12 rounded-xl bg-transparent shadow-md shadow-gray-400">
					<img className="mx-auto my-1" width={24} src={item.thumbnail_url} />
				</div>
			))}
		</div>
	);
};

export default TechnologyCards;
