import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import './SignIn.scss';
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle, auth } from '../../firebase/firebaseUtils';

class SignIn extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }
    
    handleSubmit= async event => {
        event.preventDefault();

        const {email, password} =this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: '',})
        } catch (error) {
            console.log(error)
        }
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
                    <div className='buttons'>
                        <CustomButton type="submit" >Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google </CustomButton>
                    </div>
                    


                </form>
            </div>
        )
    }
}

export default SignIn;
