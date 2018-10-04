import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import instance from '../axiosConfig';
import { fetchDataFactory } from '../store/api/actionCreators';

const WithAppData = WrappedComponent => class extends Component {
  componentDidMount() {
    this.fetchAppData();
  }

  fetchAppData = () => {
    const { fetchUsers, fetchPosts, fetchPhotos } = this.props;
    fetchUsers();
    fetchPosts();
    fetchPhotos();
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
};

const fetchUsers = fetchDataFactory('users', instance('users'));
const fetchPosts = fetchDataFactory('posts', instance('posts'));
const fetchPhotos = fetchDataFactory('photos', instance('photos'));

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers,
  fetchPosts,
  fetchPhotos,
}, dispatch);

const enhances = compose(
  connect(null, mapDispatchToProps),
  WithAppData,
);

export default WrappedComponent => enhances(WrappedComponent);
