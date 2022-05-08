import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '@utils';
import app from 'config/app';
import { getLastBlockNumberUrl } from '../urls';

const url = getLastBlockNumberUrl();

const useGetLastBlockNumber = () => {
	const [blockNumber, setBlockNumber] = useState('');

	const { data, isValidating } = useSWR(() => (url ? url : null), fetcher, {
		refreshInterval: app.FETCH_INTERVAL_LAST_BLOCK,
	});

	const result = !isValidating && data && String(data.result);
	const number = result && result !== blockNumber ? result : null;

	useEffect(() => {
		number && setBlockNumber(number);
	}, [number]);

	//Otra posibilidad era escuchando a la blockchain cuando habia cambios, pero se perdian algunos bloques, asi que decidi ir por el fetch con intervalos Ejemplo aca abajo

	/* 	useEffect(() => {
		if (!web3) return;
		const subscription = web3?.eth
			.subscribe('newBlockHeaders', function (error, result) {
				if (!error) {
					const blockNumberHex = web3.utils.toHex(result.number);

					setBlockNumber(blockNumberHex);
				}

				console.error(error);
			})
			.on('connected', function (subscriptionId) {
				console.log(subscriptionId);
			})
			.on('data', function (blockHeader) {
				console.log(blockHeader, 'blockHeader');
			})
			.on('error', console.error);
		return () => {
			// unsubscribes the subscription
			subscription.unsubscribe(function (error, success) {
				if (success) {
					console.log('Successfully unsubscribed!');
				}
			});
		};
	}, [web3]); */

	return { blockNumber };
};

export default useGetLastBlockNumber;
