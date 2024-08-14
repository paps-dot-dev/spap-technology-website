import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
import { MdHouse } from 'react-icons/md';

interface Props {
	link: any;
}
const NavItem: React.FC<Props> = ({ link }) => {
	return (
		<li className="">
			<button className="flex flex-col items-center">
				<img className="w-6" src={link.icon_url} />
				<span className="text-xs">Home</span>
			</button>
		</li>
	);
};

export default NavItem;
