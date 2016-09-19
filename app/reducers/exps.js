import { REQUEST_EXPS, RECEIVE_EXPS } from '../actions/actionCreators';

function exps(state={
  isFetching: false,
  toReview: [] }, action) {
  switch(action.type) {
    case REQUEST_EXPS:
      return Object.assign({}, state, {isFetching: true});

    case RECEIVE_EXPS:
      return Object.assign({}, state, {isFetching: false, toReview: action.expsToReview});

    default:
      return state;
  }
}

export default exps;
