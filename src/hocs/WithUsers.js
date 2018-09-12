import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchDataFactory } from '../store/api/actionCreators';
import { getUsers } from '../store/api/selectors';

const WithUsers = WrappedComponent =>
  class extends Component {
    componentDidMount() {
      this.props.fetchData();
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  }

const mapStateToProps = state => ({
  users: getUsers(state),
});

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchDataFactory('users'), dispatch),
});

const enhances = compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithUsers,
);

export default WrappedComponent => enhances(WrappedComponent);
