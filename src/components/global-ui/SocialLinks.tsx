import React from 'react';
import { SiGithub, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';

const SocialLinks: React.FC = () => {
	return (
		<div className="hidden lg:flex justify-between items-center ml-auto w-fit gap-8 px-20 py-5">
			<a
				href="https://github.com/paps-dot-dev"
				target="_blank"
				className="text-2xl hover:text-indigo-500 duration-200">
				<SiGithub />
			</a>
			<a
				href="https://linkedin.com/in/shawn-papineau"
				target="_blank"
				className="text-2xl hover:text-indigo-500 duration-200">
				<SiLinkedin />
			</a>
			<a
				href="https://x.com/shawn_paps"
				target="_blank"
				className="text-2xl hover:text-indigo-500 duration-200">
				<SiX />
			</a>
			<a
				href="https://instagram.com/shawn.paps"
				target="_blank"
				className="text-2xl hover:text-indigo-500 duration-200">
				<SiInstagram />
			</a>
		</div>
	);
};

export default SocialLinks;
