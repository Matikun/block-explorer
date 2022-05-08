import { useWeb3 } from '@contexts/web3';
import useAccount from '@contexts/web3/hooks/useAccount';
import useNetwork from '@contexts/web3/hooks/useNetwork';
import { messages } from '@messages';
import { Button } from 'antd';
import ConnectToMetamask from '../connect';

const Login = () => {
	const { account } = useAccount();
	const { isLoading } = useWeb3();
	const { isSupported, hasInitialResponse } = useNetwork();

	return (
		<>
			{isLoading ? (
				<Button disabled={true}>{messages.common.loading}</Button>
			) : account && isSupported ? (
				<>
					<h2>{messages.login.welcome}</h2>
				</>
			) : (
				<ConnectToMetamask hasInitialResponse={hasInitialResponse} isSupported={isSupported} />
			)}
		</>
	);
};

export default Login;