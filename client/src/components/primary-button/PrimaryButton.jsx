import { StyledPrimaryButton } from './styles';
import { useNavigate } from 'react-router-dom';

const PrimaryButton = ({
	text,
	setState,
	setValue,
	url,
	color,
	bgcolor,
	align,
	state
}) => {
	const navigate = useNavigate();
	console.log(state);
	return (
		<StyledPrimaryButton
			color={color}
			bgcolor={bgcolor}
			align={align}
			onClick={() => {
				if (setState) setState(setValue);
				if (url) navigate(url, { state });
			}}
		>
			{text}
		</StyledPrimaryButton>
	);
};

export default PrimaryButton;
