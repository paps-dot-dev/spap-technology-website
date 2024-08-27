import React from 'react';

interface Props {
	link: any;
}
const NavItem: React.FC<Props> = ({ link }) => {
	return (
		<a
			className="flex flex-col justify-center items-center hover:text-indigo-500 hover:bg-indigo-500/50 rounded-full ease-linear duration-100"
			href={link.href_url}>
			<img className="w-5 lg:w-8" src={link.icon_url} />
			<span className="text-xs lg:text-sm">{link.title}</span>
		</a>
	);
};

export default NavItem;
