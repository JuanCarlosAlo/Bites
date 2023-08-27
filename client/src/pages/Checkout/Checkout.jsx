import { Navigate, useLocation } from 'react-router-dom';
import PageComponent from '../../components/page-component/PageComponent';
import ItemSecondaryContainer from '../../components/item-secondary-container/ItemSecondaryContainer';
import TotalPrice from '../../components/total-price/TotalPrice';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import BuyButton from '../../components/buy-button/BuyButton';
import { useState } from 'react';
import Modal from '../../components/modal/Modal';
import { useFetch } from '../../hooks/useFetch';

const Checkout = () => {
	const { state } = useLocation();

	const [content, setContent] = useState(null);

	const { setFetchInfo } = useFetch();
	if (!state) return <Navigate to={'/'} />;

	return (
		<>
			<PageComponent isBack={true}>
				<Secondaryheader url={'/cart'} />
				<div>
					<p>Recipient:</p>
					<p>{state.recipient}</p>
				</div>
				<div>
					<p>Address:</p>
					<p>{state.address}</p>
				</div>
				{state.items.map(item => (
					<ItemSecondaryContainer
						key={item._id}
						item={item}
						setFetchInfo={setFetchInfo}
					/>
				))}
				<TotalPrice data={state.items} />

				<BuyButton
					order={state}
					setContent={setContent}
					setFetchInfo={setFetchInfo}
				/>
			</PageComponent>
			<Modal popup={true}>{content}</Modal>
		</>
	);
};

export default Checkout;
