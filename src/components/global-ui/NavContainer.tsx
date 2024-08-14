import React from 'react';
import NavItem from './NavItem';

interface Props {
	navItems: any;
}

const NavContainer: React.FC<Props> = ({ navItems }) => {
	return (
		<ul className="flex justify-between items-center w-3/4  bg-opacity-80 rounded-full bg-white mx-auto p-2 px-8 ">
			{navItems.map((item) => (
				<NavItem key={item.title} link={item} />
			))}
		</ul>
	);
};

export default NavContainer;
