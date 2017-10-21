import React from 'react';
import LoginForm from './Login'
import CreateAccountButton from './CreateAccountButton';
import * as mdc from "material-components-web/dist/material-components-web";
import BackgroundImg from '../../images/plax-bg-blurry2.png';
import iconJoin from '../../images/joinPIc.jpg';
import iconNew from '../../images/icon_new.svg';
import iconRead from '../../images/icon_read.svg';
import arrows from '../../images/asset1_3.png';


export default class Landing_Main extends React.Component {
  render() {
    return (
      <div className="landingMain col-md-12">
        <div style={{ backgroundColor: '#2f767d', padding: '0' , height: '75%'}} className="col-md-12">
          <img style={{paddingBottom: '20px'}}  className="img-responsive" src={BackgroundImg} alt="" />
          <div className='col-md-12' style={{backgroundColor: 'white', padding: '0' , height: '80%'}}>
            <div style={{margin: '20px 100px 20px 0'}} className='col-md-3'><LoginForm {...this.props} /></div>
            {/* <div style={{margin: '20px 60px 20px 0px'}} className='col-md-6'> <img   className="img-responsive" src={arrows} alt="" /></div> */}
            <div className='col-md-8'>
              <h1>Log in through FACEBOOK to start building Stories with Yo Friends!</h1>
            </div>
          </div>
        </div>
          <div style={{textAlign: 'center', color:'white', backgroundColor: '#143f48', height: '20vh'}} className='col-md-12'>
            {/* <div className='row'> */}
              <div className='col-md-12'>
                <div className='col-md-4'>
                  <h2  style={{fontSize: '3em'}} className='col-md-12' ><strong>Join</strong>   Stories</h2>
                  <br></br>
                  <br></br>
                  <p style={{color:'rgba(255, 255, 255, 0.50)', fontSize: '20px', paddingTop: '30px'}} >Join in on a Friend Scripts story to collaborate with other writers and editors, to just play around or take your ideas to the next level.</p>
                </div>
                <div className='col-md-4'>
                    <h1 style={{fontSize: '3em'}} className='col-md-12' ><strong>Chat</strong>   it <strong>up</strong> </h1>
                    <br></br>
                    <br></br>
                    <p style={{color:'rgba(255, 255, 255, 0.50)', fontSize: '20px', paddingTop: '30px'}}>Friend Scripts in app messenger makes it easy to communicate with other collaborators, to help keep the project on track.</p>
                </div>
                <div className='col-md-4'>
                    <h1 style={{fontSize: '3em'}} className='col-md-12' ><strong>Editor</strong>   Market Place</h1>
                    <br></br>
                    <br></br>
                    <p style={{color:'rgba(255, 255, 255, 0.50)', fontSize: '20px', paddingTop: '30px'}}>If you're an editor, take advantage of all of our current popular stories, maybe together your project can make it big</p>
                  </div>
              </div>
            {/* </div> */}
          </div>
        {/* <div style={{textAlign: 'center', position: 'relative',width: '540px', height: '312px', bottom: '75vh'}}></div> */}
      </div>
    );
  }
}
