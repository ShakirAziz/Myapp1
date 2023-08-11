import "./styles.css";
import Input from "../../component/input/input";
const LogIn = () => {
  return (
    <>
      <div className="form_outer_field">
        <div className="middle_field">
          <div>
            <img
              className="middle-image"
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt=""
            />
          </div>
          <div className="middle-paragraph">
            <p className="para_1">Recents Logins</p>
            <p>Click your picture or add an account</p>
          </div>
        </div>
        <div className="form_inner_field">
          <form action="#" className="logIn_form">
            <div className="section-B">
              <Input type="email" placeholder="Email address or phone number" />
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  maxlength="12"
                  required
                />
              </div>
              <div className="submit-field">
                <Input className="submit-button" type="submit" value="Log In" />
                <a href="#">Forget password?</a>
              </div>
              <div className="line-break"></div>
              <div className="create-button">
                <button>Create new account</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
