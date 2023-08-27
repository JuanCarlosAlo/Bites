import { COLORS } from '../../constants/colors';
import { HEADER_BUTTONS } from '../../constants/headerButtons';
import { MEASUREMENTS } from '../../constants/measurements';
import SecondaryButton from '../secondary-button/SecondaryButton';
import {
	StyledSecondaryHeader,
	StyledSecondaryHeaderContainer
} from './styles';

const Secondaryheader = ({ url, text, state, secondaryUrl }) => {
	return (
		<StyledSecondaryHeader url={url}>
			<StyledSecondaryHeaderContainer url={url}>
				{!url ? (
					<>
						{HEADER_BUTTONS.MAIN.map(button => (
							<SecondaryButton
								key={button._id}
								align={MEASUREMENTS.ALIGN.CENTER}
								color={COLORS.MAIN}
								url={button.URL}
								text={button.TEXT}
								state={state}
								border={true}
							/>
						))}
					</>
				) : (
					<>
						<SecondaryButton
							align={MEASUREMENTS.ALIGN.RIGHT}
							color={COLORS.MAIN}
							url={url}
							text={'BACK'}
							state={state}
							border={true}
						/>
						{text && (
							<SecondaryButton
								align={MEASUREMENTS.ALIGN.RIGHT}
								color={COLORS.MAIN}
								url={secondaryUrl}
								text={text}
								border={true}
							/>
						)}
					</>
				)}
			</StyledSecondaryHeaderContainer>
		</StyledSecondaryHeader>
	);
};

export default Secondaryheader;
