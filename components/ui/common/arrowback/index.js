import { LeftOutlined } from '@ant-design/icons';
import Link from 'next/link';

const ArrowBack = ({ to }) => {
	return (
		<div>
			<Link href={to}>
				<LeftOutlined />
			</Link>
			<span>Back to Home</span>
		</div>
	);
};

export default ArrowBack;
