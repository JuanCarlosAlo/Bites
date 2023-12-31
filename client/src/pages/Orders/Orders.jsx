import LoadingPage from '../../components/loading-page/loading-page';
import PageComponent from '../../components/page-component/PageComponent';
import { ORDERS_URLS } from '../../constants/urls';

import { useFetch } from '../../hooks/useFetch';
import OrderContainer from '../../components/order-container/OrderContainer';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import Text from '../../components/text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import Title from '../../components/title/Title';

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
			<Title
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={'Orders'}
			/>
			{data.orders.lenght === 0 ? (
				<Text
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
					text={`You haven't made any orders yet`}
				/>
			) : (
				data.orders.map(order => (
					<OrderContainer
						key={order._id}
						order={order}
						currentUser={currentUser}
					/>
				))
			)}
		</PageComponent>
	);
};

export default Orders;
