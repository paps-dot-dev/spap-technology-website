import React from 'react';
import ServiceDropdown from './ServiceDropdown';

const services = [
	{ title: 'Web Development', description: 'lorem ipsum lorem ipsum' },
	{
		title: 'Mobile Development',
		description: 'lorem ipsum lorem ipsum',
	},
	{
		title: 'Web Design',
		description: 'lorem ipsum lorem ipsum',
	},
	{
		title: 'Integration Development',
		description: 'lorem ipsum lorem ipsum',
	},
];

const ServicesContainer: React.FC = () => {
	return (
		<div className="space-y-4">
			{services.map((item) => (
				<ServiceDropdown key={item.title} service={item} />
			))}
		</div>
	);
};

export default ServicesContainer;
