import { StyledTitle } from './styles';

const Title = ({ text, fontSize, align, margin }) => {
	return (
		<StyledTitle align={align} fontSize={fontSize} margin={margin}>
			{text}
		</StyledTitle>
	);
};

export default Title;
