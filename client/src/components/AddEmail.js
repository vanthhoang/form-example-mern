import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddEmail extends Component {
    state = {
        email: ''
    }
    
    onSubmit =(e) => {
        e.preventDefault(); 
        this.props.addEmail(this.state.email);
        this.setState({email: ' '}) //clear the field after submit 
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value}); // Setting the title to be whatever we type in 
    render () {
        return (
            <form onSubmit={this.onSubmit} style = {{display:'flex'}}>

                <input 
                    type="text" 
                    name="email" 
                    style = {{flex: '20', padding: '15px'}}
                    className='field'
                    placeholder = "Add Your Email Address..." 
                    value = {this.state.email}
                    onChange = {this.onChange}
                />
                <input
                    type= "submit"
                    className = "btn"
                    style = {{flex: '1'}}
                />

            </form>
        )
    }
}

// // PropTypes
AddEmail.propTypes = {
    addEmail: PropTypes.func.isRequired
  }

export default AddEmail;

