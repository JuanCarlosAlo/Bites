import { StyledText } from './styles';

const Text = ({ text, color, fontSize, align }) => {
	return (
		<StyledText color={color} align={align} fontSize={fontSize}>
			{text}
		</StyledText>
	);
};

export default Text;
