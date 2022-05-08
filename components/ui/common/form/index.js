import { useEffect, useState } from 'react';
import { useEtherscanState } from '@contexts/etherscan';
import Search from 'antd/lib/input/Search';
import { Col, Form, Row } from 'antd';
import useSWR from 'swr';
import { fetcher } from '@utils';
import { useRouter } from 'next/router';
import { useWeb3 } from '@contexts/web3';
import { getTransactionsByAddressUrl } from '@services/etherescan/urls';

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
	console.log(selectedAddress, 'address');
	const fetch = async () => {
		setError(false);
		const validAdress = await web3.utils.isAddress(selectedAddress);
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
		if (data?.status == '0') {
			setError(data.message);
			console.log(data);
		}
		if (data?.status == '1') {
			console.log(data);
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
				{error && <p className='error'>{error}</p>}
			</Col>
		</Row>
	);
};

export default SearchForm;
