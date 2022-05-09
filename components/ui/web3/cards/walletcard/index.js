import useNetwork from '@contexts/web3/hooks/useNetwork';
import useWalletInfo from '@contexts/web3/hooks/useWalletInfo';
import Loader from '@components/ui/common/loader';
import { messages } from '@messages';
import { Card, Descriptions } from 'antd';
import { oneColumnBreakpoints } from '@styles/theme';

const WalletCard = ({}) => {
	const { balance, account } = useWalletInfo();
	const { isSupported } = useNetwork();

	return (
		<>
			{account && isSupported && (
				<Card>
					<Descriptions column={oneColumnBreakpoints} bordered labelStyle={{ fontWeight: 'bold' }}>
						<Descriptions.Item label={messages.wallet.account}>{account}</Descriptions.Item>
						<Descriptions.Item label={messages.wallet.balance}>
							{balance ?? <Loader size='small' />}
							{` `}
							{balance ? messages.wallet.token : ''}
						</Descriptions.Item>
					</Descriptions>
				</Card>
			)}
		</>
	);
};

export default WalletCard;
