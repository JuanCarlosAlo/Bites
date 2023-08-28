import { useForm } from 'react-hook-form';
import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import LoadingPage from '../../components/loading-page/loading-page';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import InputContainer from '../../components/InputContainer/InputContainer';
import { FORM_VALIDATIONS } from '../../constants/formValidations';
import { useFetch } from '../../hooks/useFetch';
import { USERS_URLS } from '../../constants/urls';
import ErrorPage from '../../components/error-page/ErrorPage';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import { COLORS } from '../../constants/colors';

import { MEASUREMENTS } from '../../constants/measurements';
import Title from '../../components/title/Title';

const EditProfile = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	const { data, loading, error, setFetchInfo } = useFetch({
		url: USERS_URLS.ALL_USERS
	});

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	if (loadingFirebase || loading) return <LoadingPage />;
	if (error) return <ErrorPage />;

	return (
		<PageComponent isBack={true}>
			<Secondaryheader url={'/profile'} />
			<Title
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={'Edit Profile'}
			/>
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, setFetchInfo, data, currentUser)
				)}
			>
				<InputContainer
					errors={errors}
					formValidation={FORM_VALIDATIONS.name}
					keyForm={'userName'}
					label={'Username'}
					register={register}
					type={'userName'}
					defaultValue={currentUser.userName}
				/>
				<InputContainer
					errors={errors}
					formValidation={FORM_VALIDATIONS.address}
					keyForm={'address'}
					label={'Address'}
					register={register}
					type={'address'}
					defaultValue={
						currentUser.address !== 'none' ? currentUser.address : ''
					}
				/>
				<PrimaryButton
					text={'Accept'}
					bgcolor={COLORS.TERCIARY}
					color={COLORS.WHITE}
				/>
			</form>
		</PageComponent>
	);
};

const onSubmit = async (formData, e, setFetchInfo, data, currentUser) => {
	e.preventDefault();

	const { userName, address } = formData;
	const userNameUsed = data.find(user => user.userName === userName);

	if (!userNameUsed) {
		try {
			await setFetchInfo({
				url: USERS_URLS.EDIT_USER + currentUser._id,
				options: {
					method: METHODS.POST,
					body: JSON.stringify({
						userName,
						address
					}),
					headers: HEADERS
				},
				navigateTo: '/'
			});
		} catch (error) {
			console.log(error);
		}
	}
};

export default EditProfile;
