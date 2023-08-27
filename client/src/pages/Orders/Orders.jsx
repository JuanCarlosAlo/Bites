import LoadingPage from '../../components/loading-page/loading-page';
import PageComponent from '../../components/page-component/PageComponent';
import { ORDERS_URLS } from '../../constants/urls';

import { useFetch } from '../../hooks/useFetch';
import OrderContainer from '../../components/order-container/OrderContainer';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';

const Orders = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	const params = useParams();
	const { data, loading } = useFetch({
		url: `${ORDERS_URLS.ALL_ORDERS}${params.id}`
	});

	if (loading || !data || loadingFirebase) return <LoadingPage />;

	return (
		<PageComponent isBack={true}>
			<Secondaryheader url={'/'} />
			{data.orders.map(order => (
				<OrderContainer
					key={order._id}
					order={order}
					currentUser={currentUser}
				/>
			))}
		</PageComponent>
	);
};

export default Orders;
