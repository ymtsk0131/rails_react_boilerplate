import React, { Component } from 'react';
import _ from 'lodash'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UsersIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    axios.get('http://localhost:3000/api/users').then(results => {
      const data = results.data;
      console.log(data);
      this.setState({
        users: [...data]
      });
    });
  }

  renderUsers() {
    return _.map(this.state.users, user => (
      <tr key = { user.id }>
        <td>{ user.name }</td>
        <td>{ user.email }</td>
        <td>{ user.introduction }</td>
      </tr>
    ))
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Introduction</th>
            </tr>
          </thead>
          <tbody>
            { this.renderUsers() }
          </tbody>
        </table>
        <Link to="/users/new">New Event</Link>
      </React.Fragment>
    )
  }
}

export default UsersIndex