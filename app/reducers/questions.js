import { REQUEST_QUESTIONS, RECEIVE_QUESTIONS } from '../actions/actionCreators';

function questions(state={
  isFetching: false,
  toReview: [] }, action) {
  switch(action.type) {
    case REQUEST_QUESTIONS:
      return Object.assign({}, state, {isFetching: true});

    case RECEIVE_QUESTIONS:
      return Object.assign({}, state, {isFetching: false, toReview: action.questionsToReview});

    default:
      return state;
  }
}

export default questions;
