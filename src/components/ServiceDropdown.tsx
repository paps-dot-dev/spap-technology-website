import React from 'react';
import DropdownExpansion from './DropdownExpansion';

interface Props {
	service: any;
}

const ServiceDropdown: React.FC<Props> = ({ service }) => {
	return (
		<div className="bg-base-200 collapse">
			<input type="checkbox" className="peer" />
			<div className="collapse-title bg-primary text-primary-content peer-checked:bg-primary-white peer-checked:text-primary">
				{service.title}
			</div>
			<div className="collapse-content bg-primary text-primary-content peer-checked:bg-primary-white peer-checked:text-primary">
				<DropdownExpansion service={service} />
			</div>
		</div>
	);
};

export default ServiceDropdown;
