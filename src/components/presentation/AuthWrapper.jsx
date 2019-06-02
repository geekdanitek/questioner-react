import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { get } from '../../utils/Storage';

class AuthWrapper extends Component {
  componentDidMount() {
    this.redirect();
  }

  redirect = () => {
    const { history } = this.props;
    const token = get('token');
    if (!token) {
      return history.push('/login');
    }
  };

  render() {
    const { children } = this.props;
    return children;
  }
}

export default withRouter(AuthWrapper);
