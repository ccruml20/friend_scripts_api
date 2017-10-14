import React from 'react'
import { BrowserRouter, Route, Link} from 'react-router-dom'

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

class CreateLogin extends React.Component{
  constructor(props) {
      super(props);

      this.label = "Create an Account"
  }
  render() {
    return(

      <Link to="/CreateLoginPage"><button>Create an Account</button></Link>

    )
  }

}

export default CreateLogin;
