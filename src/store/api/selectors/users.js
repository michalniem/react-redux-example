import { createSelector } from 'reselect';

const getAllUsers = state => state.users;

const getUsers = (users) => {
  if (users.data) {
    const selectedUsers = users.data.data;
    return {
      ...users,
      data: selectedUsers,
    };
  }
  return users;
};

export default createSelector(
  getAllUsers,
  getUsers,
);
