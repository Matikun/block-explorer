import { useState } from 'react';
import { Modal } from 'antd';
import { useEtherscanState } from '@contexts/etherscan';
import ArrowBack from '@components/ui/common/arrowback';
import DetailCard from '@components/ui/common/details';
import DataTable from '@components/ui/common/table';
import { columnsSearch } from '@components/ui/common/table/columns';
import { addHashKeyToObjArray } from '@utils';

const SearchTx = () => {
	const { selectedTransactions } = useEtherscanState();
	const [selectedTx, setSelectedTx] = useState(null);

	const dataSource = selectedTransactions && addHashKeyToObjArray(selectedTransactions);

	const handler = (data) => setSelectedTx(data);

	return (
		<>
			<ArrowBack to={'/'} />
			<h2 className='text-center'>Transactions</h2>
			{dataSource && <DataTable dataSource={dataSource} columns={columnsSearch} handler={handler} />}
			{selectedTx && (
				<Modal
					width={'100%'}
					visible={selectedTx}
					onCancel={() => setSelectedTx(null)}
					onOk={() => setSelectedTx(null)}
				>
					<DetailCard data={selectedTx} />
				</Modal>
			)}
		</>
	);
};

export default SearchTx;
