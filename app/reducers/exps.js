import { RECEIVE_EXPS, REQUEST_EXPS } from '../actions/actionCreators';

const exps = (state = {
  isFetching: false,
  toReview: [] }, action) => {
  switch (action.type) {
    case REQUEST_EXPS:
      return Object.assign({}, state, { isFetching: true });

    case RECEIVE_EXPS:
      // eslint-disable-next-line max-len
      return Object.assign({}, state, { isFetching: false, toReview: action.expsToReview });

    default:
      return state;
  }
};

export default exps;
