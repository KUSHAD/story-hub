import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyBK3rqtDoZ_laiiT5Kb1q1Djs1ccy5iKyA",
	authDomain: "willy-8f93c.firebaseapp.com",
	projectId: "willy-8f93c",
	storageBucket: "willy-8f93c.appspot.com",
	messagingSenderId: "763249406573",
	appId: "1:763249406573:web:a559c4eab46ecc09de4564",
};
firebase.initializeApp(firebaseConfig);
export const firebaseFirestore = firebase.firestore();
export const firebaseFirestoreTimeStamp = firebase.firestore.FieldValue.serverTimestamp();
