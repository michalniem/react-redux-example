import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchDataFactory } from '../store/api/actionCreators';

const WithData = WrappedComponent => class extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
};

const enhances = (resource, instance) => compose(
  connect(
    state => ({ data: state[resource] }),
    dispatch => ({ fetchData: bindActionCreators(fetchDataFactory(resource, instance), dispatch) }),
  ),
  WithData,
);

export default (resource, instance) => WrappedComponent => enhances(resource, instance)(WrappedComponent);
