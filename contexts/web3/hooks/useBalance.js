import app from 'config/app';
import useSWR from 'swr';
import { useWeb3 } from '..';
import useAccount from './useAccount';

const useBalance = () => {
	const { account } = useAccount();
	const { web3 } = useWeb3();

	const fetcher = async () => {
		const weiBalance = await web3.eth.getBalance(account);
		const ethBalance = web3.utils.fromWei(weiBalance, 'ether');
		return Number(ethBalance).toFixed(6);
	};

	const { data, isValidating } = useSWR(`getBalanceFrom${account}`, fetcher, {
		refreshInterval: app.FETCH_INTERVAL_ETH_PRICE,
	});

	const isLoadingbalance = isValidating && !data;

	return { balance: data, isLoadingbalance };
};

export default useBalance;
