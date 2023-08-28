import { StyledPage } from './styles';

const PageComponent = ({ children, isBack }) => {
	return <StyledPage isBack={isBack}>{children}</StyledPage>;
};

export default PageComponent;
