import React, { Component } from 'react';
import {FormControl, FormGroup,ControlLabel, Button} from 'react-bootstrap';


export default class Login extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
          email: "",
          password:""
        };
      }
      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
      }
    render(){
        return(
            <div className="Login">
             <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                />
            </FormGroup>
            <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
            >Se connecter</Button>
            </form>
            </div>
            
            
        );
    }
}
              
            