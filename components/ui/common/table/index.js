import { Table } from 'antd';

const DataTable = ({ dataSource, columns, handler }) => {
	return (
		<Table
			dataSource={dataSource}
			columns={columns}
			onRow={(record) => ({
				onClick: () => {
					handler(record);
				},
			})}
		/>
	);
};

export default DataTable;
