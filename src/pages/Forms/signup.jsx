import React from "react";
import key from "./images/key.jpg";
import usersList from "../../services";
import { Link } from "react-router-dom";
import "./signup.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      role: "",
      error: [],
    };
  }

  registerNewUser = async (e) => {
    e.preventDefault();
    try {
      const response = await usersList.registerUser(
        this.state.firstname,
        this.state.lastname,
        this.state.email,
        this.state.password,
        e.target.role.value
      );

      this.props.history.push("/login");
    } catch (error) {
      this.setState({ error: "server error !" });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <section>
        <div className="conatiner">
          <div className="user signupBx">
            <div className="imgBx">
              <img src={key} alt="Heart" />
            </div>

            <div className="formBx">
              <form onSubmit={this.registerNewUser}>
                <h2>Create an account</h2>
                
                <input
                  type="text"
                  placeholder="Firstname"
                  name="firstname"
                  onChange={this.handleChange}
                />

                <input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  onChange={this.handleChange}
                />

                <input
                  type="text"
                  placeholder="Role"
                  value="0"
                  name="role"
                  style={{ display: "none" }}
                />

                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChange}
                />

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                />

                <input type="submit" value="signup" />
                <p className="signup">
                  Already have an account yet? <Link to="/login">Sign in.</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
