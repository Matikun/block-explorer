const Loader = ({ small = false }) => {
	return (
		<div
			className={`${small ? 'sk-chase-small' : 'sk-chase'}`}
			style={{ margin: `${small ? 'auto' : '2em auto'}` }}
		>
			<div className='sk-chase-dot'></div>
			<div className='sk-chase-dot'></div>
			<div className='sk-chase-dot'></div>
			<div className='sk-chase-dot'></div>
			<div className='sk-chase-dot'></div>
			<div className='sk-chase-dot'></div>
		</div>
	);
};

export default Loader;
