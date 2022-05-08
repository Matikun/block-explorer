import { useWeb3 } from '@contexts/web3';
import { blockFormtNumbers, fetcher } from '@utils';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { getLastBlockrUrl } from '../urls';
import useGetLastBlockNumber from './useGetLastBlockNumber';

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
			setBlocks((prev) => {
				const copy = [...prev];
				copy.unshift(blockFormtNumbers(result, hexToNumber));
				return copy;
			});
	}, [result, hexToNumber]);

	return { blocks, isLoading, error };
};

export default useGetBlockByNumber;
