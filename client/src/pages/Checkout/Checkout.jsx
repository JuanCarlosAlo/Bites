import { Navigate, useLocation } from 'react-router-dom';
import PageComponent from '../../components/page-component/PageComponent';
import ItemSecondaryContainer from '../../components/item-secondary-container/ItemSecondaryContainer';

import TotalPrice from '../../components/total-price/TotalPrice';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import BuyButton from '../../components/buy-button/BuyButton';
import { useState } from 'react';
import Modal from '../../components/modal/Modal';

const Checkout = () => {
	const { state } = useLocation();
	if (!state) return <Navigate to={'/'} />;
	const [content, setContent] = useState(null);

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
					<ItemSecondaryContainer key={item._id} item={item} />
				))}
				<TotalPrice data={state.items} />
				<BuyButton order={state} setContent={setContent} />
			</PageComponent>
			<Modal popup={true}>{content}</Modal>
		</>
	);
};

export default Checkout;
