import React from 'react';
import { Form, FormEventsListener, TextField } from 'react-components-form';
import Schema from 'form-schema-validation';

const loginSchema = new Schema({
    login:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const LoginForm  = () => {
    const eventsListener = new FormEventsListener();
    return (
        <div>
            <Form
                schema={loginSchema}
                onSubmit={data => console.log(data)}
                onError={(errors, data) => console.log('error', errors, data)}
                eventsListener={eventsListener}
            >
                <TextField name="login" label="Login" type="text" />
                <TextField name="password" onChangeModel={({ name, value }) => { console.log(name, value) }} label="password" type="text" />
            </Form>
            <button onClick={() => eventsListener.callEvent('submit')}>Login</button>
        </div>
    );
};

export default LoginForm;
