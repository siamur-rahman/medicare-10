
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../../Components/pages/Login/Firebase/firebase.init';

initializeAuthentication();


const useFirebase = () => {
   const [user, setUser] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   const auth = getAuth();

   const signInUsingGoogle = () => {
      setIsLoading(true);
      const googleProvider = new GoogleAuthProvider();

      signInWithPopup(auth, googleProvider)
         .then(result => {
            const { displayName, email, photoURL } = result.user;
            const logInUser = {
               name: displayName,
               email: email,
               photo: photoURL
            };
            setUser(logInUser);
         })
         .finally(() => setIsLoading(false));
   }

   // observe user state change
   useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, user => {
         if (user) {
            setUser(user);
         }
         else {
            setUser({})
         }
         setIsLoading(false);
      });
      return () => unsubscribed;
   }, [auth])

   const logOut = () => {
      setIsLoading(true);
      signOut(auth)
         .then(() => { })
         .finally(() => setIsLoading(false));
   }

   return {
      user,
      isLoading,

      signInUsingGoogle,
      logOut
   }
}

export default useFirebase;



//old code sothik

// const useFirebase = () => {
//    const [user, setUser] = useState({});
//    const [error, setError] = useState('');

//    const auth = getAuth()
//    const googleProvider = new GoogleAuthProvider();
//    // const githubProvider = new GithubAuthProvider();

//    const signInUsingGoogle = () => {
//       signInWithPopup(auth, googleProvider)
//          .then(result => {
//             console.log(result.user);
//             setUser(result.user);
//          })
//          .catch(error => {
//             setError(error.message);
//          })
//    }

//    // const signInUsingGithub = () => {
//    //     signInWithPopup(auth, githubProvider)
//    //         .then(result => {
//    //             setUser(result.user);
//    //         })
//    // }

//    const logout = () => {
//       signOut(auth)
//          .then(() => {
//             setUser({});
//          })
//    }

//    useEffect(() => {
//       onAuthStateChanged(auth, user => {
//          if (user) {
//             setUser(user);
//          }
//       })
//    }, [auth]);

//    return {
//       user,
//       error,
//       signInUsingGoogle,
//       //  signInUsingGithub,
//       logout
//    }
// }

// export default useFirebase;


