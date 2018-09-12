import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchDataFactory } from '../store/api/actionCreators';
import { getPosts } from '../store/api/selectors';

const WithPosts = WrappedComponent =>
  class extends Component {
    componentDidMount() {
      this.props.fetchData();
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  }

const mapStateToProps = state => ({
  posts: getPosts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchDataFactory('posts'), dispatch),
});

const enhances = compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithPosts,
);

export default WrappedComponent => enhances(WrappedComponent);
