import CompletionBar from '../completion-bar/CompletionBar';
import { getDate } from '../../utils/getDate';
import { useFetch } from '../../hooks/useFetch';

import { METHODS } from '../../constants/methods';
import { MAIN_COORDENATES } from '../../constants/mainCoordenates';
import { OPEN_ROUTE_API } from '../../constants/headers';
import LoadingPage from '../loading-page/loading-page';
import ErrorPage from '../error-page/ErrorPage';

const OrderContainer = ({ order, currentUser }) => {
	const { data, loading, error } = useFetch({
		url: 'https://api.openrouteservice.org/v2/matrix/driving-car',
		options: {
			method: METHODS.POST,
			body: JSON.stringify({
				locations: [order.coordinates, MAIN_COORDENATES],
				id: order._id,
				metrics: ['duration'],
				resolve_locations: false
			}),
			headers: OPEN_ROUTE_API
		}
	});
	if (loading) return <LoadingPage />;
	if (error) return <ErrorPage />;

	return (
		<div>
			<p>{getDate(order.date)}</p>
			<CompletionBar
				initialDuration={order.completed ? 0 : data.durations[0][1]}
				userId={currentUser._id}
				orderId={order._id}
			/>
		</div>
	);
};

export default OrderContainer;
