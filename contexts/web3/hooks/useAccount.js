import { useEffect } from 'react';
import useSWR from 'swr';
import { useWeb3 } from '..';

const useAccount = () => {
	const { web3, provider } = useWeb3();

	const { data, mutate, ...rest } = useSWR(
		() => (web3 ? 'web3/accounts' : null),
		async () => {
			const accounts = await web3.eth.getAccounts();

			return accounts[0];
		}
	);

	useEffect(() => {
		provider &&
			provider.on('accountsChanged', (accounts) => mutate(accounts[0]) ?? null);
	}, [mutate, provider]);

	return {
		account: data,
		mutate,
		...rest,
	};
};

export default useAccount;
