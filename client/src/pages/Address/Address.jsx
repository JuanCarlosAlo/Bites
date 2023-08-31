import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import PageComponent from '../../components/page-component/PageComponent';
import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/formValidations';
import { fetchCoordinates } from '../../utils/fetchCoordinates';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import { AuthContext } from '../../context/Auth.context';
import { useContext, useState } from 'react';
import { v4 } from 'uuid';
import { StyledForm } from './styles';
import InputContainer from '../../components/InputContainer/InputContainer';
import Title from '../../components/title/Title';
import LoadingPage from '../../components/loading-page/loading-page';

const Address = () => {
	const { state } = useLocation();
	const { currentUser } = useContext(AuthContext);
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	if (!state) return <Navigate to={'/'} />;
	if (loading) return <LoadingPage />;
	return (
		<PageComponent isBack={true}>
			<Secondaryheader url={'/cart'} />
			<Title
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={'Address and recipient'}
			/>
			<StyledForm
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, state, navigate, setLoading)
				)}
			>
				<InputContainer
					errors={errors}
					formValidation={FORM_VALIDATIONS.recipient}
					keyForm={'recipient'}
					label={'Recipient'}
					register={register}
					type={'recipient'}
					defaultValue={currentUser ? currentUser.userName : ''}
				/>
				<InputContainer
					errors={errors}
					formValidation={FORM_VALIDATIONS.address}
					keyForm={'address'}
					label={'Address'}
					register={register}
					type={'address'}
					defaultValue={currentUser ? currentUser.address : ''}
				/>

				<PrimaryButton
					align={MEASUREMENTS.ALIGN.CENTER}
					bgcolor={COLORS.TERCIARY}
					color={COLORS.WHITE}
					text={'Continue'}
				/>
			</StyledForm>
		</PageComponent>
	);
};

const onSubmit = async (formData, e, state, navigate, setLoading) => {
	e.preventDefault();

	const { recipient, address } = formData;
	setLoading(true);
	const coordinates = await fetchCoordinates(address);

	navigate('/checkout', {
		state: { _id: v4(), recipient, coordinates, address, items: [...state] }
	});
};

export default Address;
