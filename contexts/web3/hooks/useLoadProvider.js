import { useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import initialState from '../initialState';
import { showErrorAlert } from '@utils';

const useLoadProvider = () => {
	const [web3Api, setWeb3Api] = useState(initialState);

	useEffect(() => {
		const loadProvider = async () => {
			const provider = await detectEthereumProvider();
			if (provider) {
				const web3 = new Web3(provider);
				setWeb3Api({
					provider,
					web3,
					isLoading: false,
				});
			} else {
				setWeb3Api((api) => ({ ...api, isLoading: false }));
				showErrorAlert('please install Metamask for a better user experience');
			}
		};

		loadProvider();
	}, []);

	return web3Api;
};

export default useLoadProvider;
