import SearchForm from '@components/ui/common/form';
import BlocksTable from '@components/ui/pages/home/BlocksTable';
import ChainCard from '@components/ui/web3/cards/chaincard';
import WalletCard from '@components/ui/web3/cards/walletcard';

export default function Home() {
	return (
		<div>
			<h1 className='text-center'>Block Explorer for Ethereum Blockchain</h1>
			<SearchForm />
			<div className='card-container-flex'>
				<ChainCard />
				<WalletCard />
			</div>
			<BlocksTable />
		</div>
	);
}
