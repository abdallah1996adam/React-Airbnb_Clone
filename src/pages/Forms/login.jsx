import React from "react";
import "./form.scss";
import keylock from "./images/keylock.jpeg";
import { Link } from "react-router-dom";
import {userService} from "../../services/";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

      error: null,
    };
  }

  getUser = async (e) => {
    e.preventDefault();
    try {
        const response = await userService.loginUser(
        this.state.email,
        this.state.password
      );
     
      let redirect = (response.data.user.role === "touriste") ? "/" : "/hote" ;
      this.props.history.push(redirect);

    } catch (error) {
      this.setState({ error: "utilisateur non trouvé" });
      console.log(error);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {

    return (
      <section className="login_box">
        <div className="conatiner">
          <div className="user signinBx">
            <div className="imgBx">
              <img src={keylock} alt="Heart" />
            </div>
            <div className="formBx">
              <form onSubmit={this.getUser}>
                <h2>Sign In</h2>

                <input
                  type="text"
                  placeholder="User Email"
                  name="email"
                  onChange={this.handleChange}
                />

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                />

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
