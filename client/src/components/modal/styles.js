import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledModal = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: ${({ popup }) => {
		if (!popup) { return '0' } else { return '50%' }
	}};

	transform:${({ popup }) => {
		if (!popup) { return 'translateX(0)' } else { return 'translateX(-50%)' }
	}};
	height: ${({ popup }) => {
		if (!popup) { return '100vh' } else { return 'fit-content' }
	}};
	width: ${({ popup }) => {
		if (!popup) { return '100vw' } else { return 'fit-content' }
	}};
	background-color: rgb(0,0,0,0.8);

	z-index: 100;
`;

const StyledModalContainer = styled.div`
background-color: ${COLORS.BLACK_TRANSPARENT};
border: 2px solid ${COLORS.MAIN};
padding: 1rem;
`
export { StyledModal, StyledModalContainer };
