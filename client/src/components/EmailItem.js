import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

export class EmailItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4', 
      padding: '10px'
    }
  }

  render() {
    const {_id, email} = this.props.email;
    return (
      <div style={this.getStyle()}>
        <p>
          {email}
          <button onClick = {this.props.delEmail.bind(this,_id)} style = {btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

// // PropTypes
EmailItem.propTypes = {
  email: PropTypes.object.isRequired,
  delEmail: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#d32f2f',
  color: '#fff', 
  border: 'none', 
  padding: '5px 9px', 
  borderRadius: '100%',
  cursor: 'pointer', 
  margin: '0px',
  float: 'right'
}

export default EmailItem