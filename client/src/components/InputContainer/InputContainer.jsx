import {
	StyledErrorText,
	StyledInput,
	StyledInputContainer,
	StyledSelect
} from './styles';

const InputContainer = ({
	keyForm,
	label,
	type,
	register,
	formValidation,
	errors,
	defaultValue,
	options
}) => {
	if (options) {
		return (
			<StyledInputContainer>
				<label htmlFor={keyForm}>{label}</label>
				<StyledSelect
					name={keyForm}
					id={keyForm}
					{...register(keyForm, formValidation)}
					defaultValue={options[0].TEXT}
				>
					{options.map(option => (
						<option
							defaultValue={option.SELECTED}
							key={option.id}
							value={option.VALUE}
						>
							{option.TEXT}
						</option>
					))}
				</StyledSelect>
				<StyledErrorText>{errors?.[keyForm]?.message}</StyledErrorText>
			</StyledInputContainer>
		);
	} else {
		return (
			<StyledInputContainer>
				<label htmlFor={keyForm}>{label}</label>
				<StyledInput
					type={type}
					name={keyForm}
					id={keyForm}
					{...register(keyForm, formValidation)}
					defaultValue={defaultValue}
				/>
				<StyledErrorText>{errors?.[keyForm]?.message}</StyledErrorText>
			</StyledInputContainer>
		);
	}
};

export default InputContainer;
