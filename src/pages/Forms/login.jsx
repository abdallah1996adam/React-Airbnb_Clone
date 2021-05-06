import React from "react";
import "./login.scss";
import keylock from "./images/keylock.jpeg";
import { Link } from "react-router-dom";
import usersList from "../../services/";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  getUser = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.elements.user.value;
      const password = e.target.elements.password.value;
      const response = await usersList.loginUser(email, password);
      
      this.props.history.push("/");
    } catch (error) {
      this.setState({ error: "utilisateur non trouvé" });
      console.log(error);
    }
  };

  render() {
    return (
      <section>
        <div className="conatiner">
          <div className="user signinBx">
            <div className="imgBx">
              <img src={keylock} alt="Heart" />
            </div>
            <div className="formBx">
              <form onSubmit={this.getUser}>
                <h2>Sign In</h2>
                <input type="text" placeholder="User Email" name="user" />
                <input type="password" placeholder="Password" name="password" />
                <input type="submit" value="login" />
                <p className="signup">
                  don't have an account yet? <Link to="/signup">Sign up.</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
