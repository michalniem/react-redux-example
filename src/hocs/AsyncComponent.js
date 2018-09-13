import React, { Component } from 'react';

const AsyncComponent = importComponent =>
  class extends Component {
    state = {
      component: null,
    };

    async componentDidMount() {
      const lazyComponent = await importComponent();
      this.setState({ component: lazyComponent.default });
    };

    render() {
      const LazyComponent = this.state.component;
      return LazyComponent ? <LazyComponent {...this.props} /> : null
    }
  };

export default AsyncComponent;
