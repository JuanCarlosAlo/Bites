import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { auth } from '../config/firebase.config';
import { AuthContext } from '../context/Auth.context';
import { USERS_URLS } from '../constants/urls';

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [attempts, setAttempts] = useState(0);
	const [loadingFirebase, setLoadingFirebase] = useState(true);
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async user => {
			if (user) {
				await getUserInfoFromMongo(user, setCurrentUser, attempts, setAttempts);
			} else {
				setCurrentUser(null);
			}
			setLoadingFirebase(false);
		});

		return () => unsubscribe();
	}, []);

	useEffect(() => {
		const socket = io('https://bites-server.onrender.com/');

		socket.on('collectionUsersChange', async change => {
			switch (change.operationType) {
				case 'update':
					await getUserInfoFromMongo(
						currentUser,
						setCurrentUser,
						attempts,
						setAttempts
					);
					break;
				default:
					break;
			}
		});

		socket.emit('startCollectionListener');

		return () => {
			socket.disconnect();
		};
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, loadingFirebase }}>
			{children}
		</AuthContext.Provider>
	);
};

const getUserInfoFromMongo = async (
	user,
	setCurrentUser,
	attempts,
	setAttempts
) => {
	try {
		const response = await fetch(`${USERS_URLS.GET_USER_BY_ID}${user.uid}`);

		if (response.ok) {
			const userInfo = await response.json();

			setCurrentUser({
				...user,
				...userInfo
			});
			setAttempts(0);
		} else {
			throw new Error('Error al obtener la información del usuario');
		}
	} catch (error) {
		if (attempts < 5) {
			setTimeout(
				() =>
					getUserInfoFromMongo(user, setCurrentUser, attempts + 1, setAttempts),
				1000
			);
		}
	}
};
