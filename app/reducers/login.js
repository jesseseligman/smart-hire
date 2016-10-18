import { LOGIN_ERROR, LOGIN_SUCCESS } from '../actions/actionCreators';

const login = (state = { error: false }, action) => {
  switch (action.type) {

    case LOGIN_ERROR:
      return Object.assign({}, state, { error: true });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, { error: false });

    default:
      return state;
  }
};

export default login;
