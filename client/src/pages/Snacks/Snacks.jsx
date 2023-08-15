import CartButton from '../../components/cart-button/CartButton';
import ErrorPage from '../../components/error-page/ErrorPage';
import ItemContainer from '../../components/item-container/ItemContainer';
import LoadingPage from '../../components/loading-page/loading-page';
import PageColumnsContainer from '../../components/page-columns-container/PageColumnsContainer';
import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { SNACKS_URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';

const Snacks = () => {
	const { data, loading } = useFetch({
		url: SNACKS_URLS.ALL_SNACKS
	});
	if (loading) return <LoadingPage />;
	if (!data) return <ErrorPage />;

	return (
		<PageComponent>
			<CartButton />
			<Secondaryheader />
			<PageColumnsContainer>
				{data.map(item => (
					<ItemContainer key={item._id} item={item} />
				))}
			</PageColumnsContainer>
		</PageComponent>
	);
};

export default Snacks;
