import { networks } from '@services/networks/networks';
import { showErrorAlert } from './alerts';

const changeNetwork = async (networkName, provider) => {
	try {
		if (!provider) return showErrorAlert('Wallet not found');
		await provider.request({
			method: 'wallet_switchEthereumChain',
			params: [{ ...networks[networkName] }],
		});
	} catch (error) {
		showErrorAlert('Ocurrio un error al cambiar de red');
	}
};

export default changeNetwork;
