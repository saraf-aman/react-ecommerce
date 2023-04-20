import { useState } from "react";
// import { useEffect, React } from "react"; //Redirect
// import { getRedirectResult } from "firebase/auth"; //Redirect

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  //   auth, //Redirect
  //   signInWithGoogleRedirect, //Redirect
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //Login with Google PopUp
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password!!");
          break;
        case "auth/user-not-found":
          alert("Account Doesn't Exist!!");
          break;
        default:
          console.log("User Error", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an Account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
          {/*<Button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
  </Button>*/}
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

//Login With Google Redirect
//   useEffect(() => {
//     async function fetchData() {
//       const response = await getRedirectResult(auth);
//       if (response) {
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//       }
//     }
//     fetchData();
//   }, []);
