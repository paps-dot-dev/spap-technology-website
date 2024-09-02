import React from 'react';

const ContactForm = () => {
	return (
		<div className="bg-white p-10 rounded-md">
			<h1 className="font-semibold text-primary">Let's Get In Touch.</h1>
			<h2>Fill Out the Form Below to Get In Touch with Me</h2>
			<form className="mt-8">
				<label className="input input-bordered flex items-center bg-black gap-2">
					Name
					<input type="text" className="grow" placeholder="Daisy" />
				</label>
			</form>
		</div>
	);
};

export default ContactForm;
