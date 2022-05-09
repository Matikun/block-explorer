import { useWeb3 } from '@contexts/web3';
import { Button } from 'antd';
import { messages } from '@messages';
import { changeNetwork, goToMetamask } from '@utils';

const ConnectToMetamask = ({ hasInitialResponse, isSupported }) => {
	const { requireInstall, connect, provider } = useWeb3();

	return !isSupported && hasInitialResponse ? (
		<Button type='secondary' ghost onClick={() => changeNetwork('ethereum', provider)}>
			{messages.login.switch}
		</Button>
	) : requireInstall ? (
		<Button type='secondary' ghost onClick={goToMetamask}>
			{messages.login.install}
		</Button>
	) : (
		<Button type='secondary' ghost onClick={connect}>
			{messages.login.connect}
		</Button>
	);
};

export default ConnectToMetamask;
