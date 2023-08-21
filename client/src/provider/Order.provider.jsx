import { useState } from 'react';

import { OrderContext } from '../context/Order.context';
import { useCompletionBar } from '../hooks/useCompletionBar';

const OrderProvider = ({ children }) => {
	const [options, setOptions] = useState({
		initialDuration: null,
		userId: undefined,
		orderId: undefined
	});
	const { remainingTime, completionPercentage } = useCompletionBar(
		options.initialDuration,
		options.userId,
		options.orderId
	);

	return (
		<OrderContext.Provider
			value={{ remainingTime, completionPercentage, setOptions }}
		>
			{children}
		</OrderContext.Provider>
	);
};

export { OrderProvider };
