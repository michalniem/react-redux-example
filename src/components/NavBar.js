import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  tab: {
    minHeight: '64px',
  },
};

class NavBar extends Component {
  state = {
    value: null,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Tabs
        value={this.state.value}
        indicatorColor="primary"
        textColor="primary"
        onChange={this.handleChange}
      >
        <Tab
          label="Photos"
          className={classes.tab}
          component={Link}
          to="/photos"
        />
        <Tab
          label="Users"
          className={classes.tab}
          component={Link}
          to="/users"
        />
        <Tab
          label="Posts"
          className={classes.tab}
          component={Link}
          to="/posts"
        />
      </Tabs>
    );
  }
}

export default withStyles(styles)(NavBar);
