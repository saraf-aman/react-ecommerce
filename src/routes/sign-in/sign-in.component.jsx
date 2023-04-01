// import { useEffect, React } from "react"; //Redirect
// import { getRedirectResult } from "firebase/auth"; //Redirect

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import {
  //   auth, //Redirect
  signInWithGooglePopup,
  //   signInWithGoogleRedirect, //Redirect
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  //Login With Redirect
  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     }
  //     fetchData();
  //   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <SignUpForm />
      {/*<button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
  </button>*/}
    </div>
  );
};

export default SignIn;
