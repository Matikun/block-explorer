/* 
usando la libreria web3 podemos escucha cuando hay cambios en la blockchain eth


useEffect(() => {
  const subscription = web3.eth
    .subscribe('newBlockHeaders', function (error, result) {
      if (!error) {
        console.log(result, 'result');

        return;
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
