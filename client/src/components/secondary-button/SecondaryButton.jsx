import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledButtonContainer } from './styles';

const SecondaryButton = ({
	text,
	setState,
	setValue,
	url,
	color,
	align,
	state,
	border,
	bgcolor
}) => {
	const navigate = useNavigate();

	return (
		<StyledButtonContainer align={align}>
			<StyledButton
				color={color}
				border={border}
				bgcolor={bgcolor}
				onClick={() => {
					if (setState) setState(setValue);
					if (url) navigate(url, { state });
				}}
			>
				{text}
			</StyledButton>
		</StyledButtonContainer>
	);
};

export default SecondaryButton;
