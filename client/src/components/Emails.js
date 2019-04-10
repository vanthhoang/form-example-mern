import React, { Component } from 'react';
import EmailItem from './EmailItem';
import PropTypes from 'prop-types'; 

class Emails extends Component {
  render() {
    return this.props.emails.map((email)=> (
        <EmailItem key ={email._id} email = {email} 
        delEmail = {this.props.delEmail}
        />
    ));  
  }
}
// PropTypes
Emails.propTypes = {
  emails: PropTypes.array.isRequired,
  delEmail: PropTypes.func.isRequired,
}

export default Emails;
  