import ErrorPage from '../../components/error-page/ErrorPage';
import ItemContainer from '../../components/item-container/ItemContainer';
import LoadingPage from '../../components/loading-page/loading-page';
import PageColumnsContainer from '../../components/page-columns-container/PageColumnsContainer';
import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { RECOMENDED_URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import { getRecomendedItems } from '../../utils/getRecomendedItems';

const Home = () => {
	const { data, loading } = useFetch({
		url: RECOMENDED_URLS.ALL_RECOMENDED
	});
	if (loading) return <LoadingPage />;
	if (!data) return <ErrorPage />;
	const recomendedItems = getRecomendedItems(data);
	return (
		<PageComponent>
			<Secondaryheader />

			<PageColumnsContainer>
				{recomendedItems.map(item => (
					<ItemContainer key={item._id} item={item} />
				))}
			</PageColumnsContainer>
		</PageComponent>
	);
};

export default Home;
