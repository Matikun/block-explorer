import { Card, Descriptions } from 'antd';
import useEthPrice from '@contexts/web3/hooks/useEthPrice';
import useNetwork from '@contexts/web3/hooks/useNetwork';
import Loader from '@components/ui/common/loader';
import { messages } from '@messages';
import { columnsBreakpoints } from '@styles/theme';

const ChainCard = () => {
	const { ethPrice } = useEthPrice();
	const { network } = useNetwork();
	return (
		<Card>
			<Descriptions column={columnsBreakpoints} bordered labelStyle={{ fontWeight: 'bold' }}>
				<Descriptions.Item label={messages.wallet.network}>
					{network ? network : <Loader small={true} />}
				</Descriptions.Item>
				<Descriptions.Item label={messages.wallet.ethPrice}>
					{ethPrice ? `US${ethPrice}` : <Loader small={true} />}
				</Descriptions.Item>
			</Descriptions>
		</Card>
	);
};

export default ChainCard;
