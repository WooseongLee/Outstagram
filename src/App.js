import React, { Component, useState } from "react";
import "./App.css";
import fire from "./config/Firebase";
import styled from "styled-components";
import Input from "./Components/Input";
import Button from "./Components/Button";
// import useInput from "./Hooks/useInput";

// const [action, setAction] = useState("login");
// const name = useInput("");
// const password = useInput("");
// const confirmPassword = useInput("");
// const email = useInput("");

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius:0px;
  width: 350px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.id);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <form>
            {/* <Input placeholder={"Email"} {...email} />
            <Input placeholder={"Password"} {...password} type="password" /> */}
            <Button text={"Log in"} />
          </form>
        ) : (
          <form>
            {/* <Input
              className="email"
              placeholder={"Email"}
              {...email}
              type="email"
            />
            <Input placeholder={"Name"} {...name} />
            <Input placeholder={"Password"} {...password} type="password" />
            <Input
              placeholder={"Confirm Password"}
              {...confirmPassword}
              type="password"
            /> */}
            <Button text={"Sign up"} />
          </form>
        )}
      </div>
    );
  }
}

export default App;
