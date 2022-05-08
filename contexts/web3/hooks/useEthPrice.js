import { URL_ETH_PRICE } from '@services/etherescan/urls';
import useSWR from 'swr';

const FETCH_INTERVAL = 10000;

const fetcher = async (url) => {
	const resp = await fetch(url);
	const json = await resp.json();
	return json.market_data.current_price.usd ?? null;
};

const useEthPrice = () => {
	const { data, isValidating, ...rest } = useSWR(URL_ETH_PRICE, fetcher, {
		refreshInterval: FETCH_INTERVAL,
	});
	const ethPrice = data;

	return { isLoading: !data || isValidating, ethPrice, ...rest };
};

export default useEthPrice;
