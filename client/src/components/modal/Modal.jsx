import { createPortal } from 'react-dom';
import { StyledModal, StyledModalContainer } from './styles';

const Modal = ({ children, popup }) => {
	if (!children) return;

	return createPortal(
		<StyledModal popup={popup}>
			<StyledModalContainer>{children}</StyledModalContainer>
		</StyledModal>,
		document.getElementById('modal')
	);
};

export default Modal;
