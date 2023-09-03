import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Modal from '../components/modal/Modal';
import { ModalContext } from '../context/Modal.context';

import { useContext } from 'react';

const Layout = () => {
	const { content, popup } = useContext(ModalContext);
	return (
		<>
			<Modal popup={popup}>{content}</Modal>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
