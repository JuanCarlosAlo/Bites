import { StyledText } from './styles';

const Text = ({ text, color, fontSize, align, nofullwidth }) => {
	return (
		<StyledText
			color={color}
			align={align}
			fontSize={fontSize}
			nofullwidth={nofullwidth}
		>
			{text}
		</StyledText>
	);
};

export default Text;
