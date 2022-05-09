import { messages } from '@messages';
import { oneColumnBreakpoints } from '@styles/theme';
import { Descriptions, Tag } from 'antd';
import { tx_status } from 'enums';

const DetailCard = ({ data }) => {
	const {
		blockHash,
		blockNumber,
		from,
		to,
		gas,
		txreceipt_status,
		value,
		gasPrice,
		confirmations,
		timeStamp,
		hash,
		nonce,
	} = data;

	const success = txreceipt_status === tx_status.success;

	return (
		<>
			<Descriptions
				column={oneColumnBreakpoints}
				bordered
				title={messages.details.title}
				labelStyle={{ fontWeight: 'bold' }}
			>
				<Descriptions.Item label={messages.details.txhash}>{hash}</Descriptions.Item>
				<Descriptions.Item label={messages.details.blockhash}>{blockHash}</Descriptions.Item>
				{txreceipt_status && (
					<Descriptions.Item label={messages.details.status}>
						{success ? (
							<Tag color='success'>{messages.common.success}</Tag>
						) : (
							<Tag color='error'>{messages.common.error}</Tag>
						)}
					</Descriptions.Item>
				)}
				<Descriptions.Item label={messages.details.block}>{blockNumber}</Descriptions.Item>
				{timeStamp && <Descriptions.Item label={messages.details.timestamp}>{timeStamp}</Descriptions.Item>}
				{confirmations && (
					<Descriptions.Item label={messages.details.confirmations}>{confirmations}</Descriptions.Item>
				)}
				<Descriptions.Item label={messages.details.from}>{from}</Descriptions.Item>
				<Descriptions.Item label={messages.details.to}>{to}</Descriptions.Item>
				<Descriptions.Item label={messages.details.value}>{value}</Descriptions.Item>
				<Descriptions.Item label={messages.details.gas}>{gas}</Descriptions.Item>
				<Descriptions.Item label={messages.details.gasprice}>{gasPrice}</Descriptions.Item>
				<Descriptions.Item label={messages.details.nonce}>{nonce}</Descriptions.Item>
			</Descriptions>
		</>
	);
};

export default DetailCard;
