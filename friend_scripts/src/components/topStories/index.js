import React from 'react';
import * as mdc from 'material-components-web/dist/material-components-web';
import './styles.css'

class TopStories extends React.Component {

  render(){
    return (

      <div className="textField mdc-form-field mdc-form-field--align-end ">
        <div className="mdc-textfield mdc-textfield--box">
          <input type="text" id="tf-box" className="mdc-textfield__input"></input>
            <label htmlFor="tf-box" className="mdc-textfield__label">Your Name</label>
            <div className="mdc-textfield__bottom-line"></div>
          </div>
        </div>
      )}
    }


    export default TopStories;
