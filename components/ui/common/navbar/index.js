import { Login } from '@components/ui/web3';
import { Row, Col, PageHeader } from 'antd';

const Navbar = () => {
	return (
		<Row align='center' justify='center'>
			<Col xs={24} sm={22} md={20} lg={18} xl={16}>
				<PageHeader
					className='site-page-header'
					subTitle='BlockExplorer'
					extra={<Login />}
				/>
			</Col>
		</Row>
	);
};

export default Navbar;
