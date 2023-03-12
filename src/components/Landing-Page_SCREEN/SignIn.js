import css from "./SignIn.module.css";
import SignInForm from "./SignInForm";

const SignIn = () => {
  return (
    <div className={css.singInForm}>
      <h1>ANIMA</h1>
      <SignInForm className={css.form} />
    </div>
  );
};

export default SignIn;
