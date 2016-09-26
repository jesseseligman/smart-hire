import { RECEIVE_EDUS, REQUEST_EDUS } from '../actions/actionCreators';

const edus = (state = {
  isFetching: false,
  toReview: [] }, action) => {
  switch (action.type) {
    case REQUEST_EDUS:
      return Object.assign({}, state, { isFetching: true });

    case RECEIVE_EDUS:
      // eslint-disable-next-line max-len
      return Object.assign({}, state, { isFetching: false, toReview: action.edusToReview });

    default:
      return state;
  }
};

export default edus;
