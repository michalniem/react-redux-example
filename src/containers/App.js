import React from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import instance from '../axiosConfig';
import { asyncActionCreatorFactory } from '../store/api/actionCreators';
import WithProviders from '../hocs/WithProviders';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    console.log(this.props.users)
    return (
      <div>App</div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: bindActionCreators(asyncActionCreatorFactory('users'), dispatch),
});

const enhances = compose(
  WithProviders,
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhances(App);
