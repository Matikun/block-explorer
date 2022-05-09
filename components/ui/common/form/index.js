import { useEffect, useState } from 'react';
import { useEtherscanState } from '@contexts/etherscan';
import Search from 'antd/lib/input/Search';
import { Col, Row, Typography } from 'antd';
import useSWR from 'swr';
import { fetcher } from '@utils';
import { useRouter } from 'next/router';
import { useWeb3 } from '@contexts/web3';
import { getTransactionsByAddressUrl } from '@services/etherescan/urls';
import { etherscan_response } from 'enums';

const SearchForm = () => {
	const router = useRouter();
	const { web3 } = useWeb3();
	const { setSelectedAddress, selectedAddress, setSelectedTransactions } = useEtherscanState();
	const [shouldFetch, setShouldFetch] = useState(false);
	const [error, setError] = useState(false);

	const { data, isValidating } = useSWR(
		() => (shouldFetch ? getTransactionsByAddressUrl(selectedAddress) : null),
		fetcher
	);

	const fetch = async () => {
		setError(false);
		const validAdress = (await web3?.utils.isAddress(selectedAddress)) ?? true; // if we dont have web3, we validate the address in the request.
		if (!validAdress) {
			setError('invalid Address');
			return setTimeout(() => {
				setError(false);
			}, 3000);
		}
		setShouldFetch(true);
	};

	const updateAddress = (e) => {
		setSelectedAddress(e.target.value);
	};

	useEffect(() => {
		if (data?.status == etherscan_response.error) {
			setError(data.message);
		}
		if (data?.status == etherscan_response.success) {
			//set the transaction data
			setSelectedTransactions(data.result);
			//move to search page
			router.push('/search');
		}
		setShouldFetch(false);
	}, [data, setSelectedTransactions, router]);

	return (
		<Row justify='center' style={{ marginBottom: 40 }}>
			<Col xs={22} md={18} xl={12}>
				<Search
					allowClear={true}
					disabled={isValidating}
					name='address'
					onChange={updateAddress}
					placeholder='Search transactions by Address'
					onSearch={fetch}
					loading={isValidating}
					value={selectedAddress}
				/>
				{error && <Typography.Text type='danger'>{error}</Typography.Text>}
			</Col>
		</Row>
	);
};

export default SearchForm;
