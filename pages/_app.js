import 'antd/dist/antd.css';
import '../styles/globals.css';
import Layout from '@components/ui/common/layout';
import { EtherscanProvider } from '@contexts/etherscan';
import { Web3Provider } from '@contexts/web3';

function MyApp({ Component, pageProps }) {
	return (
		<Web3Provider>
			<EtherscanProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</EtherscanProvider>
		</Web3Provider>
	);
}

export default MyApp;
