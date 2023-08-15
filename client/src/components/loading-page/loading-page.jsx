import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import PageComponent from '../page-component/PageComponent';
import Text from '../text/Text';

const LoadingPage = () => {
	return (
		<PageComponent>
			<Text
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={'Loading'}
				color={COLORS.MAIN}
			/>
		</PageComponent>
	);
};

export default LoadingPage;
