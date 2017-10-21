// import React from 'react';
// import { Form, FormEventsListener, TextField } from 'react-components-form';
// import Schema from 'form-schema-validation';
//
// const loginSchema = new Schema({
//     login:{
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });
//
// const LoginForm  = () => {
//     const eventsListener = new FormEventsListener();
//     return (
//         <div>
//             <Form
//                 schema={loginSchema}
//                 onSubmit={data => console.log(data)}
//                 onError={(errors, data) => console.log('error', errors, data)}
//                 eventsListener={eventsListener}
//             >
//                 <TextField name="login" label="Login" type="text" />
//                 <TextField name="password" onChangeModel={({ name, value }) => { console.log(name, value) }} label="password" type="text" />
//             </Form>
//             <button onClick={() => eventsListener.callEvent('submit')}>Login</button>
//         </div>
//     );
// };
//
// export default LoginForm;



import React from 'react';
import FacebookLogin from 'react-facebook-login';
import graph from 'fb-react-sdk';

  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    responseFacebook(response) {
      // console.log(response)
      // sessionStorage.setItem("user", response.name);
      this.props.logInUser(response.name, response.userID, response.picture, response.accessToken);

      if(response.name){
        this.props.history.push("/");
      }

      else{alert("Check your FaceBook Account")}
    }

    render() {
      return (
        <div>
        <FacebookLogin
          appId="531734550505861"
          autoLoad={false}
          fields="name,email,picture.type(large)"
          scope="public_profile"
          size="medium"
          callback={this.responseFacebook.bind(this)}
        />

      </div>
      )
    }
  }

  export default MyComponent;
