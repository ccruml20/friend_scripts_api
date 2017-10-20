import React from 'react';
import * as mdc from 'material-components-web/dist/material-components-web';


class TextField extends React.Component {

  render(){
    return (

      <div className="mdc-radio col-md-1">
        <div className="mdc-form-field">
          <input type="checkbox" id="input"></input>
            <label htmlFor="input">Input Label</label>
          </div>
        </div>
      )}
    }


    export default TextField;
