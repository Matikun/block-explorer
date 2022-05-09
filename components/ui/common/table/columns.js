export const blockColum = [
	{
		title: 'Block',
		dataIndex: 'number',
		key: 'number',
		ellipsis: true,
	},

	{
		title: 'Transactions',
		dataIndex: 'transactions',
		render: (arr) => (arr.length === 0 ? arr.length : <a href='#'>{arr.length}</a>),
		ellipsis: true,
	},
	{
		title: 'Miner',
		dataIndex: 'miner',
		key: 'miner',
		ellipsis: true,
		responsive: ['md', 'lg'],
	},
	{
		title: 'Gas Fee',
		dataIndex: 'gasUsed',
		key: 'gasUsed',
		ellipsis: true,
		responsive: ['md', 'lg'],
	},
];

export const columnsSearch = [
	{
		title: 'Block',
		dataIndex: 'blockNumber',
		key: 'blockNumber',
	},
	{
		title: 'Transaction',
		dataIndex: 'hash',
		render: (text) => <a href='#'>{text}</a>,
		ellipsis: true,
	},
	{
		title: 'Value',
		dataIndex: 'value',
		key: 'value',
		ellipsis: true,
		responsive: ['md', 'lg'],
	},
	{
		title: 'Gas Price',
		dataIndex: 'gasPrice',
		key: 'gasPrice',
		ellipsis: true,
		responsive: ['xs', 'md', 'lg'],
	},
];
