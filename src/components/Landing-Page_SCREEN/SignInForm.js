import css from "./SignInForm.module.css";

const SignInForm = () => {
  return (
    <div className={css.container}>
      <form className={css.form}>
        <label>
          <input type="email" name="email" placeholder="Email"></input>
        </label>

        <label>
          <input type="password" name="password" placeholder="Password" />
        </label>
      </form>

      <button type="button" className={css.signInBtn}>
        Sign In
      </button>
    </div>
  );
};

export default SignInForm;
