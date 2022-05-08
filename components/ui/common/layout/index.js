import { Layout, Row, Col } from 'antd';
import Loader from '../loader';
import Navbar from '../navbar';
import { useWeb3 } from 'contexts/web3';

const LayoutApp = ({ children }) => {
	const { isLoading } = useWeb3();
	const { Header, Content } = Layout;
	return (
		<Layout className='layout site-layout-background' style={{ minHeight: '100vh' }}>
			<Header>
				<Navbar />
			</Header>
			<Content className='site-layout' style={{ padding: '0 20px', marginTop: 64 }}>
				<div className='container-fuild'>
					<Row align='center' justify='center'>
						<Col xs={24} sm={22} md={20} lg={18} xl={16}>
							{isLoading ? <Loader /> : children}
						</Col>
					</Row>
				</div>
			</Content>
		</Layout>
	);
};

export default LayoutApp;
