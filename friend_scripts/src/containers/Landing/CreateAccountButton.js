import React from 'react'
import {Link} from 'react-router-dom'

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

class CreateAccountButton extends React.Component{
  constructor(props) {
      super(props);

      this.label = "Create an Account"
  }
  render() {
    return(

      <Link to="/CreateAccount"><button style={buttonStyle} >Create an Account</button></Link>

    )
  }

}

export default CreateAccountButton;
