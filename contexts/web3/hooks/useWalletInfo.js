import useAccount from './useAccount';
import useBalance from './useBalance';

const useWalletInfo = () => {
	const { account } = useAccount();
	const { balance } = useBalance();
	return { account, balance };
};

export default useWalletInfo;
