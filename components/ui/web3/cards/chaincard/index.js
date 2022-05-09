import { Card, Descriptions } from 'antd';
import useEthPrice from '@contexts/web3/hooks/useEthPrice';
import useNetwork from '@contexts/web3/hooks/useNetwork';
import Loader from '@components/ui/common/loader';
import { messages } from '@messages';
import { oneColumnBreakpoints } from '@styles/theme';
import Logo from '@components/ui/common/logo';
import { useWeb3 } from '@contexts/web3';

const ChainCard = () => {
	const { requireInstall } = useWeb3();
	const { ethPrice } = useEthPrice();
	const { network } = useNetwork();
	return (
		<Card>
			<Descriptions column={oneColumnBreakpoints} bordered labelStyle={{ fontWeight: 'bold' }}>
				{!requireInstall && (
					<Descriptions.Item label={messages.wallet.network}>
						{network ? network : <Loader size='small' />}
					</Descriptions.Item>
				)}

				<Descriptions.Item label={messages.wallet.ethPrice}>
					{ethPrice ? (
						<div style={{ display: 'flex' }}>
							<span>US${ethPrice}</span>
							<span>
								<Logo src={'/small-eth.webp'} height={20} width={20} />
							</span>
						</div>
					) : (
						<Loader size='small' />
					)}
				</Descriptions.Item>
			</Descriptions>
		</Card>
	);
};

export default ChainCard;
