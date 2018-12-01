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
    const {
      fetchMovies,
    } = this.props;

    fetchMovies();
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
};

// const fetchMovies = fetchDataFactory('movies', instance.get('movies'));

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch({ type: 'FETCH_MOVIES' }),
});

const enhances = compose(
  connect(null, mapDispatchToProps),
  WithAppData,
);

export default WrappedComponent => enhances(WrappedComponent);
