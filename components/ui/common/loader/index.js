import { Spin } from 'antd';

const Loader = ({ size }) => {
	return (
		<div style={{ margin: `${!size === 'small' ? 'auto' : '2em auto'}`, textAlign: 'center' }}>
			<Spin size={size} />
		</div>
	);
};

export default Loader;
