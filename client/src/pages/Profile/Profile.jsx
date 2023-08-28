import { signOut } from 'firebase/auth';
import PageComponent from '../../components/page-component/PageComponent';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { auth } from '../../config/firebase.config';
import Text from '../../components/text/Text';
import { AuthContext } from '../../context/Auth.context';
import { useContext } from 'react';

import LoadingPage from '../../components/loading-page/loading-page';
import { StyledProfileContainer } from './styles';
import Title from '../../components/title/Title';

const Profile = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);

	if (loadingFirebase) return <LoadingPage />;

	return (
		<PageComponent isBack={true}>
			<Secondaryheader url={'/'} text={'Edit'} secondaryUrl={'/edit-profile'} />
			<Title
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={'Profile'}
				margin={0}
			/>
			<StyledProfileContainer>
				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
					text={`Username: ${currentUser.userName}`}
				/>
				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
					text={`Address: ${currentUser.address}`}
				/>
			</StyledProfileContainer>
			<PrimaryButton
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.WHITE}
				bgcolor={COLORS.TERCIARY}
				setState={signOut}
				setValue={auth}
				text={'Logout'}
				url={'/'}
			/>
		</PageComponent>
	);
};

export default Profile;
