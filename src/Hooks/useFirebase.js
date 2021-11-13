import { useState, useEffect } from 'react';
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, getIdToken, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const [authError, setAuthError] = useState('');

    const [admin, setAdmin] = useState(false);

    const [token, setToken] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {

        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {

                setAuthError('');

                const newUser = { email, displayName: name };
                setUser(newUser);

                //............ save user to data base.....................
                saveUser(email, name, 'POST');

                //..............send name to firebase after creation......
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {

                    }).catch((error) => {

                    });

                history.push('/')

            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => {
                setIsLoading(false);
            })
    };



    const loginUser = (email, password, location, history) => {

        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {

                const destination = location?.state?.from || '/';

                history.replace(destination);
                // history.push(destination);

                setAuthError('');

            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    };


    const signInWithGoogle = (location, history) => {

        setIsLoading(true);

        signInWithPopup(auth, googleProvider)

            .then((result) => {

                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');

                setAuthError('');

                const redirect = location?.state?.from || '/';
                history.replace(redirect)

            }).catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => {

                setIsLoading(false);
            })
    };

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {

                setUser(user);

                getIdToken(user)

                    .then(idToken => {
                        setToken(idToken)
                    })
            }
            else {

                setUser({});

            }

            setIsLoading(false);

        });

        return () => unsubscribe;

    }, [auth]);


    useEffect(() => {

        const url = `https://desolate-gorge-00712.herokuapp.com/users/${user?.email}`;

        fetch(url)

            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })

    }, [user.email])


    const logOut = () => {

        setIsLoading(true);

        signOut(auth).then(() => {

        }).catch(error => {

        })
            .finally(() => {

                setIsLoading(false);

            });
    };

    const saveUser = (email, displayName, method) => {

        const user = {

            email, displayName

        }



        fetch('https://desolate-gorge-00712.herokuapp.com/users', {

            method: method,

            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(user)

        })
            .then(res => res.json())

    };

    return {
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle,
        admin,
        token

    }
}

export default useFirebase;