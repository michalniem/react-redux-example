import React, { Component } from 'react';
import axios from 'axios';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import instance from '../axiosConfig';
import { fetchDataFactory } from '../store/api/actionCreators';

const WithAppData = WrappedComponent => class extends Component {
  componentDidMount() {
    this.fetchAppData();
  }

  fetchAppData = () => {
    const {
      fetchUsers,
      fetchPosts,
      fetchPhotos,
      fetchMovies,
    } = this.props;

    fetchUsers();
    fetchPosts();
    fetchPhotos();
    fetchMovies();
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
};

const fetchUsers = fetchDataFactory('users', instance('users'));
const fetchPosts = fetchDataFactory('posts', instance('posts'));
const fetchPhotos = fetchDataFactory('photos', instance('photos'));
const fetchMovies = fetchDataFactory('movies', axios.get('http://localhost:3000/movies'));

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers,
  fetchPosts,
  fetchPhotos,
  fetchMovies,
}, dispatch);

const enhances = compose(
  connect(null, mapDispatchToProps),
  WithAppData,
);

export default WrappedComponent => enhances(WrappedComponent);
