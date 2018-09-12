import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchDataFactory } from '../store/api/actionCreators';
import { getPhotos } from '../store/api/selectors';

const WithPhotos = WrappedComponent =>
  class extends Component {
    componentDidMount() {
      this.props.fetchData();
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  }

const mapStateToProps = state => ({
  photos: getPhotos(state),
});

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchDataFactory('photos'), dispatch),
});

const enhances = compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithPhotos,
);

export default WrappedComponent => enhances(WrappedComponent);
