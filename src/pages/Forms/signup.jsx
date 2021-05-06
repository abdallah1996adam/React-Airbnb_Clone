import React from "react";
import key from "./images/key.jpg";
import usersList from "../../services";
import { Link } from "react-router-dom";
import "./signup.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: [],
    };
   
  }
  
  registerNewUser = async (e) => {
    e.preventDefault();
    try {
      const firstName = e.target.elements.firstname.value;
      const lastName = e.target.elements.lastname.value;
      const email = e.target.elements.email.value;
      const password = e.target.elements.password.value;
      const role = e.target.elements.role.value;
      const response = await usersList.registerUser(firstName, lastName, email, password, role);
      this.props.history.push('/login')
    } catch (error) {
      this.setState({ error: "server error !" });
    }
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
                <input type="text" placeholder="Firstname" name="firstname" />
                <input type="text" placeholder="Lastname" name="lastname" />
                <input
                  type="text"
                  placeholder="Role"
                  value = "0"
                  name = "role"
                  style={{ display: "none" }}
                />
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
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
