  import React from "react";
  import FacebookLogin from "react-facebook-login";
  import graph from "fb-react-sdk";

  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    responseFacebook(response) {
      console.log(response);
      // sessionStorage.setItem("user", response.name);
   var self = this
      // this.props.logInUser(
      //   response.name,
      //   response.userID,
      //   response.picture,
      //   response.accessToken
      // );


      fetch("/api/authors/fb/"+response.userID, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          authorName: response.name,
          userName: response.name,
          password: "12345",
          fbUserID: response.userID
        })
      })
      .then(res => {
        res.json().then(function(data) {
          console.log(data);

          self.props.logInUser(
            response.name,
            data[0].id,
            response.picture,
            response.accessToken
          );
          if (response.name) {
            self.props.history.push("/");
          } else {
            alert("Check your FaceBook Account");
          }

      })
    })



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
      );
    }
  }

  export default MyComponent;
