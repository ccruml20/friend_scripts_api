import React from 'react';
import Schema from 'form-schema-validation';
import { Form, TextField, SubmitField } from 'react-components-form';

const emailValidator = () => ({
    validator(value){
        const regex = /^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+(\-)?[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{0,6}?\.[a-zA-Z]{2,6}$/;
        if (!value.match(regex)) {
            return false;
        }
        return true;
    },
    errorMessage: 'Inserted value is not a email adress'
});

const sameValueAs = (fieldName) => ({
    validator(value, type, model){
        return value === model[fieldName];
    },
    errorMessage: 'Reapeted password is incorrect'
});

const registrationSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        validators: [emailValidator()]
    },
    phone:{
        type: String
    },
    password: {
        type: String,
        required: true
    },
    password2: {
        type: String,
        required: true,
        validators: [sameValueAs('password')]
    },
    termsAccepted: {
        type: Boolean,
        required: true,
    }
});

const RegistrationForm  = () => (
    <Form
        schema={registrationSchema}
        onSubmit={data => console.log(data)}
        onError={(errors, data) => console.log('error', errors, data)}
    >
        <h4>Create Your Account</h4>
        <TextField name="name" label="Name" type="text" />
        <TextField name="email" label="Email" type="text" />
        <TextField name="phone" label="Phone" type="text" />
        <TextField name="password" label="Password" type="password" />
        <TextField name="password2" label="Repeate password" type="password" />

        <SubmitField value="Register" />
    </Form>
);

export default class CreateAccountPage extends React.Component {

  render() {
      return (
          <div className="CreateAccountPage">

            <RegistrationForm/>

          </div>
      );
  }
}
