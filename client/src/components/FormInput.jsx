import React from 'react';

const FormInput = ({ placeholder, name, type, value, handleChange }) => {
	return (
		<div className='space-y-1'>
			<label
				className='block text-sm font-medium text-blue-500'
				for='adddressTo'
			>
				{name}
			</label>
			<input
				className='w-72 rounded-md border py-2 pl-4 placeholder:text-sm placeholder:opacity-40 focus:outline-none'
				placeholder={placeholder}
				type={type}
				step='0.0001'
				value={value}
				onChange={(e) => handleChange(e, name)}
			/>
		</div>
	);
};

export default FormInput;
