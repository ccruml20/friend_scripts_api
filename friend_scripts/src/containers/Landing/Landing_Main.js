import React from 'react';
import CreateLogin from './CreateLogin'


export default class Landing_Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="landingMain">

              <CreateLogin/>

            </div>
        );
    }
}
