import ErrorPage from '../../components/error-page/ErrorPage';
import ItemContainer from '../../components/item-container/ItemContainer';
import LoadingPage from '../../components/loading-page/loading-page';
import PageColumnsContainer from '../../components/page-columns-container/PageColumnsContainer';
import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import Title from '../../components/title/Title';
import { MEASUREMENTS } from '../../constants/measurements';
import { APPETIZERS_URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';

const Appetizers = () => {
	const { data, loading } = useFetch({
		url: APPETIZERS_URLS.ALL_APPETIZERS
	});
	if (loading) return <LoadingPage />;
	if (!data) return <ErrorPage />;

	return (
		<PageComponent>
			<Secondaryheader />
			<Title
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={'Appetizers'}
				margin={'0.5 rem'}
			/>
			<PageColumnsContainer>
				{data.map(item => (
					<ItemContainer key={item._id} item={item} />
				))}
			</PageColumnsContainer>
		</PageComponent>
	);
};

export default Appetizers;
