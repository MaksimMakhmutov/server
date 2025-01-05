import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
	apiKey: 'AIzaSyAzZZBY4tOgy8asUqkTCBpJ_dSIg1xa7w4',
	authDomain: 'server-91752.firebaseapp.com',
	projectId: 'server-91752',
	storageBucket: 'server-91752.firebasestorage.app',
	messagingSenderId: '998063398451',
	appId: '1:998063398451:web:77bd9981130cb366b40d46',
	measurementId: 'G-ZFGM9QQ450',
	databaseURL: 'https://server-91752-default-rtdb.europe-west1.firebasedatabase.app/',
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
