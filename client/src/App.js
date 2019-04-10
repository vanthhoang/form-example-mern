import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import AppNavbar from './components/AppNavbar';
import Emails from './components/Emails';
import AddEmail from './components/AddEmail';


import './App.css';


class App extends Component {
  state = { 
    emails: []
  }

  componentDidMount() {
    axios.get('api/forms')
      .then(res => this.setState({emails: res.data}));
  }

  // Delete Todo
  delEmail = (id) => { 
    axios.delete(`api/forms/${id}`)
      .then(res => this.setState({emails: [...this.state.emails.filter(email => email._id !== id)]}));
  }
  //Add Todo: 
  addEmail = (email) => {
    axios.post('api/forms/', {
      email
    })
      .then(res => this.setState(state => ({emails: [...state.emails, { email: email}]})))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className= "container">
            <AppNavbar /> 
            <br/>
            <Route exact path = "/" render = {props => (
              <React.Fragment>
                <AddEmail addEmail = {this.addEmail} /><br/>
                <Emails emails = {this.state.emails} 
                delEmail = {this.delEmail}/>
                </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

