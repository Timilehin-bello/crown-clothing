import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import './SignIn.scss';
import CustomButton from '../CustomButton/CustomButton';

class SignIn extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }
    
    handleSubmit= (event) => {
        event.preventDefault();

        this.setState({email: '', password: '',})
    }

    handleChange = (event) => {
        const { value, name} = event.target;
        this.setState({[name]: value})

    }

    render() {
        const {email, password} = this.state;
        return (
            <div className="sign-in">
                <h2 className="title" >I already have an account</h2>
                <span>Sigin in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput name="email" type="email" value={email}  label="Email" handleChange={this.handleChange} required/>

                    <FormInput 
                        name="password"
                        type="password" 
                        value={password}
                        label="Password"
                        handleChange={this.handleChange} 
                        required
                    />

                    <CustomButton type="submit" >
                        SIGN IN
                    </CustomButton>


                </form>
            </div>
        )
    }
}

export default SignIn;
