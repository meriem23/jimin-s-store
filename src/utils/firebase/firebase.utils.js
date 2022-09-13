import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbl9V3aC8bnY1Ebq_9J_HNTWv3qTkhliA",
    authDomain: "crwn-db-12302.firebaseapp.com",
    projectId: "crwn-db-12302",
    storageBucket: "crwn-db-12302.appspot.com",
    messagingSenderId: "85093954989",
    appId: "1:85093954989:web:e600ecece607f407b05d24"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Provider for Google auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    // console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef)
    // console.log(userSnapshot);
    // console.log(userSnapshot.exists());
    //user data doesn't exists: create / set the document with the data from userAuth in my collection
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log("error creating the user", error);
        }
    }
    //if user data exists
    return userDocRef;

}