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

const enhances = resource => compose(
  connect(
    state => ({ [resource]: state[resource] }),
    dispatch => ({ fetchData: bindActionCreators(fetchDataFactory(resource), dispatch) }),
  ),
  WithData,
);

export default resource => WrappedComponent => enhances(resource)(WrappedComponent);
