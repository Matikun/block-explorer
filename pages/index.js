import SearchForm from '@components/ui/common/form';
import DataTable from '@components/ui/common/table';
import useColumns from '@components/ui/common/table/useColumns';
import ChainCard from '@components/ui/web3/cards/chaincard';
import WalletCard from '@components/ui/web3/cards/walletcard';
import { useEtherscanState } from '@contexts/etherscan';
import { useWeb3 } from '@contexts/web3';
import { blockFormtNumbers } from '@utils';
import { useRouter } from 'next/router';

export default function Home() {
	const { hexToNumber } = useWeb3();
	const { blockColum } = useColumns();
	const { lastestBlocks, setSelectedTransactions } = useEtherscanState();
	const router = useRouter();

	const setBlockTx = (blockData) => {
		if (!blockData.transactions.length) {
			return;
		}
		const formated = blockData.transactions.map((obj) => blockFormtNumbers(obj, hexToNumber));
		setSelectedTransactions(formated);
		router.push('/search');
	};

	return (
		<div>
			<SearchForm />
			<div className='card-container-flex'>
				<ChainCard />
				<WalletCard />
			</div>
			{lastestBlocks && <DataTable columns={blockColum} dataSource={lastestBlocks} handler={setBlockTx} />}
		</div>
	);
}
