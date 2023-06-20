import "./styles.css";
import Input from "../component/input/input.jsx";
const LogIn = () => {
  return (
    <>
      <div className="form_outer_field">
        <div className="form_inner_field">
          <form action="#" className="logIn_form">
            <div className="section-A">
              <h2>Ship at shipped speeds</h2>
            </div>
            <div className="section-B">
              <Input placeholder="john@gmail..." htmlFor="Gmail" />
              <div>
                <Input
                  placeholder="********"
                  htmlFor="Password"
                  maxlength="12"
                  required
                />
                <div className="input-checkbox">
                  <div>
                    <input type="checkbox" name="#" id="#" />
                    <label htmlFor="#">Remember me</label>
                  </div>
                  <a href="#">Forgot password?</a>
                </div>
              </div>
              <div className="submit-field">
                <Input className="submit-button" type="submit" value="Log In" />
                <a href="#">Create a new account</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
