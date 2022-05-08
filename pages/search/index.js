import DetailCard from '@components/ui/common/details';
import DataTable from '@components/ui/common/table';
import useColumns from '@components/ui/common/table/useColumns';
import { useEtherscanState } from '@contexts/etherscan';
import { arrObjAddKey } from '@utils';
import { Modal } from 'antd';
import { useState } from 'react';

const SearchTx = () => {
	const { columnsSearch } = useColumns();
	const { selectedTransactions } = useEtherscanState();
	const [selectedTx, setSelectedTx] = useState(null);

	const dataSource = selectedTransactions && arrObjAddKey(selectedTransactions);

	const handler = (data) => setSelectedTx(data);
	console.log(selectedTransactions);

	return (
		<>
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
