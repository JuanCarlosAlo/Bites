export const getInitialUsername = email => {
	const part = email.split('@');
	const nombreUsuario = part[0];
	return nombreUsuario;
};
