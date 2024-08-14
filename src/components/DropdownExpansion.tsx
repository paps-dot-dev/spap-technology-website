import React from 'react';

interface Props {
	service: any;
}

const DropdownExpansion: React.FC<Props> = ({ service }) => {
	return <div>{service.description}</div>;
};

export default DropdownExpansion;
