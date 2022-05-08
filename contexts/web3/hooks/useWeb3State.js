import { useContext } from 'react';
import Web3Context from '../Web3Context';

const useWeb3State = () => {
	return useContext(Web3Context);
};

export default useWeb3State;
