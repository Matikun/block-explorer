import useGetBlockByNumber from '@services/etherescan/hooks/useGetBlockByNumber';
import { useEffect, useMemo, useState } from 'react';
import EtherscanContext from './EtherscanContext';
import initialState from './initialState';

export default function EtherscanProvider({ children }) {
	const [lastestBlocks, setLastestBlocks] = useState(initialState.lastestBlocks);
	const [selectedTransactions, setSelectedTransactions] = useState(initialState.selectedBlockTransactions);
	const [selectedAddress, setSelectedAddress] = useState(initialState.selectedAddres);
	const { blocks } = useGetBlockByNumber();

	useEffect(() => {
		if (blocks) {
			setLastestBlocks(blocks);
		}
	}, [blocks]);

	const contextValue = useMemo(
		() => ({
			lastestBlocks,
			selectedTransactions,
			selectedAddress,
			setSelectedTransactions,
			setSelectedAddress,
		}),
		[lastestBlocks, selectedTransactions, selectedAddress]
	);

	return <EtherscanContext.Provider value={contextValue}>{children}</EtherscanContext.Provider>;
}
