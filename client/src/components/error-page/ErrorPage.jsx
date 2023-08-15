import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import PageComponent from '../page-component/PageComponent';
import Text from '../text/Text';

const ErrorPage = () => {
	return (
		<PageComponent>
			<Text
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={'There has been an error please reload the page again.'}
				color={COLORS.MAIN}
			/>
		</PageComponent>
	);
};

export default ErrorPage;
