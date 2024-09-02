import React from 'react';
import ServiceDropdown from './ServiceDropdown';

const services = [
	{
		title: 'Web Development',
		description:
			'Your website is often the first impression customers have of your business—let’s make it count. I create custom websites that are not only visually appealing but also fast, secure, and easy to navigate. Whether you need a brand-new site or improvements to an existing one, I’ll deliver a solution that enhances your online presence and drives results.',
		thumbnail_path: '/gif/webdev.gif',
		technologies: [
			{
				name: 'Javascript',
				thumbnail_url: 'https://svgl.app/library/javascript.svg',
			},
			{
				name: 'React',
				thumbnail_url: 'https://svgl.app/library/react.svg',
			},
			{
				name: 'Astro',
				thumbnail_url: 'https://svgl.app/library/astro.svg',
			},
			{
				name: 'Laravel',
				thumbnail_url: 'https://svgl.app/library/laravel.svg',
			},
			{
				name: 'Next',
				thumbnail_url: 'https://svgl.app/library/nextjs_icon_dark.svg',
			},

			{
				name: 'Wordpress',
				thumbnail_url: 'https://svgl.app/library/wordpress.svg',
			},
		],
	},
	{
		title: 'Mobile Development',
		description:
			'In an increasingly mobile-first world, having a robust app is essential for reaching your audience wherever they are. I design and develop mobile apps that are intuitive, high-performing, and tailored to your business needs. Whether it’s iOS, Android, or cross-platform, I’ll help you create an app that engages users and elevates your brand.',
		technologies: [
			{
				name: 'React Native',
				thumbnail_url: 'https://svgl.app/library/react.svg',
			},
			{
				name: 'Swift',
				thumbnail_url: 'https://svgl.app/library/swift.svg',
			},
			{
				name: 'Kotlin',
				thumbnail_url: 'https://svgl.app/library/kotlin.svg',
			},
		],
	},
	{
		title: 'Web Design',
		description:
			'Exceptional web design starts with the user in mind. I create websites that prioritize seamless navigation and intuitive interactions, ensuring your visitors have a great experience from the moment they arrive. By focusing on usability and clarity, I design sites that not only look good but also make it easy for users to connect with your brand and achieve their goals.',
		thumbnail_path: '/gif/figma_screenshot.png',
		technologies: [
			{
				name: 'Figma',
				thumbnail_url: 'https://svgl.app/library/figma.svg',
			},
			{
				name: 'Webflow',
				thumbnail_url: 'https://svgl.app/library/webflow.svg',
			},
		],
	},
	{
		title: 'Integration Development',
		description:
			'Seamless integration of your systems and tools is key to optimizing your business operations. I specialize in developing integrations that ensure your software, applications, and platforms work together harmoniously. From API connections to data synchronization, I’ll create solutions that streamline your workflows and enhance overall efficiency.',
		technologies: [
			{
				name: 'Supabase',
				thumbnail_url: 'https://svgl.app/library/supabase.svg',
			},
			{
				name: 'Firebase',
				thumbnail_url: 'https://svgl.app/library/firebase.svg',
			},
			{
				name: 'Express',
				thumbnail_url: 'https://svgl.app/library/expressjs.svg',
			},
			{
				name: 'AWS',
				thumbnail_url: 'https://svgl.app/library/aws.svg',
			},
			{
				name: 'Azure',
				thumbnail_url: 'https://svgl.app/library/azure.svg',
			},
		],
	},
];

const ServicesContainer: React.FC = () => {
	return (
		<div className="space-y-8">
			{services.map((item) => (
				<ServiceDropdown key={item.title} service={item} />
			))}
		</div>
	);
};

export default ServicesContainer;
