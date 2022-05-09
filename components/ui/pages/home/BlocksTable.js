import DataTable from '@components/ui/common/table';
import { blockColum } from '@components/ui/common/table/columns';
import { useEtherscanState } from '@contexts/etherscan';
import { useWeb3 } from '@contexts/web3';
import { useRouter } from 'next/router';
import React from 'react';

const BlocksTable = () => {
	const router = useRouter();
	const { hexToNumber } = useWeb3();
	const { lastestBlocks, setSelectedTransactions } = useEtherscanState();

	const setBlockTx = (blockData) => {
		if (!blockData.transactions.length) return;

		const formated = blockData.transactions.map((tx) => blockFormatNumbers(tx, hexToNumber));
		setSelectedTransactions(formated);
		router.push('/search');
	};

	return lastestBlocks && <DataTable columns={blockColum} dataSource={lastestBlocks} handler={setBlockTx} />;
};

export default BlocksTable;
