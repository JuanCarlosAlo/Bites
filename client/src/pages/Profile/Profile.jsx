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

const Profile = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<PageComponent isBack={true}>
			<Secondaryheader url={'/'} />
			<Text
				align={MEASUREMENTS.ALIGN.LEFT}
				color={COLORS.MAIN}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
				text={`Username: ${currentUser.userName}`}
			/>
			<PrimaryButton
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.MAIN}
				setState={signOut}
				setValue={auth}
				text={'Logout'}
				url={'/'}
			/>
		</PageComponent>
	);
};

export default Profile;
