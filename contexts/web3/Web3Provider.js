import { useMemo } from 'react';
import Web3Context from './Web3Context';
import useLoadProvider from './hooks/useLoadProvider';
import { showErrorAlert } from '@utils';

export default function Web3Provider({ children }) {
	const web3Api = useLoadProvider();

	const _web3Api = useMemo(() => {
		const { web3, provider, isLoading } = web3Api;
		return {
			...web3Api,
			requireInstall: !isLoading && !web3,
			hexToNumber: web3
				? (any) => {
						if (web3.utils.isHex(any)) {
							return web3.utils.hexToNumberString(any);
						} else {
							return any;
						}
				  }
				: (any) => any,
			connect: async () => {
				try {
					await provider?.request({
						method: 'eth_requestAccounts',
					});
				} catch (error) {
					showErrorAlert('cannot retrieve account!');
				}
			},
		};
	}, [web3Api]);

	return <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>;
}
