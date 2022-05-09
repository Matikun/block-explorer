import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useWeb3 } from '@contexts/web3';
import useGetLastBlockNumber from './useGetLastBlockNumber';
import { blockFormatNumbers, fetcher } from '@utils';
import { getLastBlockrUrl } from '../urls';

const useGetBlockByNumber = () => {
	const { hexToNumber } = useWeb3();
	const [blocks, setBlocks] = useState([]);
	const { blockNumber } = useGetLastBlockNumber();

	//checking if the  blocks array already has the blocknumber to prevent unnecessary api calls
	const shouldFetch = !blocks.some((block) => block.number === blockNumber);
	const { data, isValidating, error } = useSWR(shouldFetch ? getLastBlockrUrl({ blockNumber }) : null, fetcher);

	const isLoading = !data && isValidating;
	const result = data ? data.result : null;

	useEffect(() => {
		result &&
			setBlocks((prevBlocks) => {
				return [blockFormatNumbers(result, hexToNumber), ...prevBlocks];
			});
	}, [result, hexToNumber]);

	return { blocks, isLoading, error };
};

export default useGetBlockByNumber;
