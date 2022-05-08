import { useContext } from 'react';
import EtherscanContext from './EtherscanContext';

const useEtherscanState = () => {
	return useContext(EtherscanContext);
};

export default useEtherscanState;
