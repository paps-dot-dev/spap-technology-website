import React from 'react';
import DropdownExpansion from './DropdownExpansion';

interface Props {
	service: any;
}

const ServiceDropdown: React.FC<Props> = ({ service }) => {
	return (
		<div className="bg-base-200 collapse z-0">
			<input type="checkbox" className="peer" />
			<div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary-white peer-checked:text-primary lg:p-8">
				{service.title}
			</div>
			<div className="collapse-content bg-primary text-primary-content peer-checked:bg-primary-white peer-checked:text-primary">
				<DropdownExpansion service={service} />
			</div>
		</div>
	);
};

export default ServiceDropdown;
