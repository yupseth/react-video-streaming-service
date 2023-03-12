import css from "./LandingPageScreen.module.css";
import Banner from "./Banner";
import SignIn from "./SignIn";

const LandingPageScreen = () => {
  return (
    <div className={css.landingPageScreen}>
      <button className={css.registerBtn}>Register</button>
      <Banner />
      {/* <div className={css.singInForm}></div> */}
      <SignIn />
    </div>
  );
};

export default LandingPageScreen;
