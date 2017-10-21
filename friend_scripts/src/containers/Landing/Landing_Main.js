import React from 'react';
import LoginForm from './Login'
import CreateAccountButton from './CreateAccountButton';
import * as mdc from "material-components-web/dist/material-components-web";
import BackgroundImg from '../../images/plax-bg-blurry2.png';
import iconJoin from '../../images/joinPIc.jpg';
import iconNew from '../../images/icon_new.svg';
import iconRead from '../../images/icon_read.svg';
import arrows from '../../images/asset1_2.png';


export default class Landing_Main extends React.Component {
  render() {
    return (
      <div className="landingMain col-md-12">
        <div style={{ backgroundColor: '#2f767d', padding: '0' , height: '75%'}} className="col-md-12">
          <img   className="img-responsive" src={BackgroundImg} alt="" />
          <div className='col-md-12' style={{backgroundColor: 'white', padding: '0' , height: '80%'}}>
            <div style={{margin: '20px 0px 20px 0'}} className='col-md-3'><LoginForm {...this.props} /></div>
            <div style={{margin: '20px 100px 20px 0'}} className='col-md-6'> <img   className="img-responsive" src={arrows} alt="" /></div>
          </div>
        </div>
        <div>

        </div>
        <div style={{backgroundColor: '#143f48', height: '100vh', padding: '0', margin: '0'}}>
          <div style={{marginTop: '40px'}} className='col-md-4'>

          </div>
          <div className='col-md-4'>

          </div>
          <div className='col-md-4'>

          </div>
          <div style={{color:'white', backgroundColor: '#143f48'}} className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='col-md-4'>
                  <h2 className='col-md-12' ><strong>SOMETHING</strong>   about</h2>
                  <h1>FRIENDSCRIPTS</h1>
                </div>
                <div className='col-md-4'>
                  <h2 className='col-md-12' ><strong>SOMETHING</strong>   about</h2>
                  <h1>FRIENDSCRIPTS</h1>
                </div>
                <div className='col-md-4'>
                  <h2 className='col-md-12' ><strong>SOMETHING</strong>   about</h2>
                  <h1>FRIENDSCRIPTS</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{textAlign: 'center', position: 'relative',width: '540px', height: '312px', bottom: '75vh'}}></div> */}
      </div>
    );
  }
}
