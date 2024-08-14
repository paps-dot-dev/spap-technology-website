import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';
import { MdClose, MdMenu } from 'react-icons/md';

interface Props {
	navItems: any;
}

const NavContainer: React.FC<Props> = ({ navItems }) => {
	const [showNavbar, setShowNavbar] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 200) {
				setShowNavbar(false);
			} else {
				setShowNavbar(true);
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		// <ul className="flex justify-between items-center w-5/6  bg-opacity-90 rounded-full bg-white mx-auto px-8">

		// </ul>
		<>
			{showNavbar ? (
				<div>
					<button
						onClick={() => setShowNavbar(false)}
						className="text-white w-fit bg-transparent absolute right-10 bottom-16 z-10 hover:bg-black">
						<MdClose />
					</button>
					<div className="btm-nav w-3/4 mx-auto mb-10 rounded-full">
						{navItems.map((item) => (
							<NavItem key={item.title} link={item} />
						))}
					</div>
				</div>
			) : (
				<button
					onClick={() => setShowNavbar(!showNavbar)}
					className="bg-primary-white w-16 h-16 flex justify-center items-center text-2xl rounded-full bg-opacity-95 z-10 ml-auto mr-2">
					<MdMenu className="text-indigo-600" />
				</button>
			)}
		</>
	);
};

export default NavContainer;
