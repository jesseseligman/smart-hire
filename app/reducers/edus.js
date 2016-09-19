import { REQUEST_EDUS, RECEIVE_EDUS } from '../actions/actionCreators';

function edus(state={
  isFetching: false,
  toReview: [] }, action) {
  switch(action.type) {
    case REQUEST_EDUS:
      return Object.assign({}, state, {isFetching: true});

    case RECEIVE_EDUS:
      return Object.assign({}, state, {isFetching: false, toReview: action.edusToReview});

    default:
      return state;
  }
}

export default edus;
