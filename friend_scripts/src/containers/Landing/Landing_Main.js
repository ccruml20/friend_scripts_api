import React from 'react';
import LoginForm from './Login'
import CreateAccountButton from './CreateAccountButton'


export default class Landing_Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="landingMain">

              <div ><LoginForm/></div>
              <div> <CreateAccountButton/></div>


            </div>
        );
    }
}
