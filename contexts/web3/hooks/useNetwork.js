import { useEffect } from 'react';
import useSWR from 'swr';
import { useWeb3 } from '@contexts/web3';
import { NETWORKS, NETWORK_ID } from '@services/networks/networks';

export const targetNetwork = NETWORKS[NETWORK_ID];

const useNetwork = () => {
	const { web3, provider } = useWeb3();

	const { data, mutate, error, ...rest } = useSWR(
		() => (web3 ? 'web3/network' : null),
		async () => {
			const chainId = await web3.eth.getChainId();
			return NETWORKS[chainId];
		}
	);

	useEffect(() => {
		provider &&
			provider.on(
				'chainChanged',
				(chainId) => mutate(parseInt(chainId, 16)) //converting the string to a hexadecimal number.
			);
	}, [mutate, provider]);

	return {
		network: data,
		hasInitialResponse: data || error,
		mutate,
		target: targetNetwork,
		isSupported: data === targetNetwork,
		...rest,
	};
};

export default useNetwork;
