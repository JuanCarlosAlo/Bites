import { StyledTitle } from './styles';

const Title = ({ text, color, fontSize, align, margin }) => {
	return (
		<StyledTitle
			color={color}
			align={align}
			fontSize={fontSize}
			margin={margin}
		>
			{text}
		</StyledTitle>
	);
};

export default Title;
