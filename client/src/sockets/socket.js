import { io } from 'socket.io-client';

const chatSocket = io.connect('http://localhost:4000');
export default chatSocket;