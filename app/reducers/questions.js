/* eslint-disable no-case-declarations */

// eslint-disable-next-line max-len
import { RATE_RESPONSE, RECEIVE_QUESTIONS, REQUEST_QUESTIONS } from '../actions/actionCreators';

const questions = (state = {
  isFetching: false,
  toReview: [] }, action) => {
  switch (action.type) {

    case REQUEST_QUESTIONS:
      return Object.assign({}, state, { isFetching: true });

    case RECEIVE_QUESTIONS:

      // eslint-disable-next-line max-len
      return Object.assign({}, state, { isFetching: false, toReview: action.questionsToReview });

    case RATE_RESPONSE:
      const { questionsIndex, responseIndex } = action;
      const newRating = action.rating;
      const { toReview } = state;
      const questionSet = toReview[questionsIndex];
      const { responses } = questionSet;

      // eslint-disable-next-line max-len
      const updatedResponse = Object.assign(responses[responseIndex], { rating: newRating });

      const nextResponses = [
        ...responses.slice(0, responseIndex),
        updatedResponse,
        ...responses.slice(responseIndex + 1)
      ];

      // eslint-disable-next-line max-len
      const nextQuestionSet = Object.assign(questionSet, { responses: nextResponses });

      const nextToReview = [...toReview.slice(0, questionsIndex),
      nextQuestionSet,
      ...toReview.slice(questionsIndex + 1)];

      return Object.assign({}, state, { toReview: nextToReview });

    default:
      return state;
  }
};

export default questions;
