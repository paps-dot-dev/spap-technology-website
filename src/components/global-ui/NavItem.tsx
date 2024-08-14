import React from 'react';

interface Props {
	link: any;
}
const NavItem: React.FC<Props> = ({ link }) => {
	return (
		<a
			className="flex flex-col justify-center items-center"
			href={link.href_url}>
			<img className="w-5" src={link.icon_url} />
			<span className="text-xs">{link.title}</span>
		</a>
	);
};

export default NavItem;
