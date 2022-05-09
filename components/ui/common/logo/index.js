import Image from 'next/image';

const Logo = ({ src, width, height, ...rest }) => {
	return (
		<div>
			<Image width={width} height={height} alt='logo' src={src} {...rest}></Image>
		</div>
	);
};

export default Logo;
