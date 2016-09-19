import { REQUEST_COMPLETE_APPLICATION, RECEIVE_COMPLETE_APPLICATION, REQUEST_REVIEWED_APPLICATIONS, RECEIVE_REVIEWED_APPLICATIONS } from '../actions/actionCreators';


function applications(state={
  isFetching: false,
  unrated: [],
  reviewedApplications: [],
  completeReviewedApplication: {}
  }, action) {
  switch(action.type) {
    case REQUEST_COMPLETE_APPLICATION:
      return Object.assign({}, state, {isFetching: true});

    case RECEIVE_COMPLETE_APPLICATION:
      return Object.assign({}, state, {isFetching: false, completeReviewedApplication: action.application});

    case REQUEST_REVIEWED_APPLICATIONS:
      return Object.assign({}, state, {isFetching: true});

    case RECEIVE_REVIEWED_APPLICATIONS:
      return Object.assign({}, state, {isFetching: false, reviewedApplications: action.reviewedApplications});

    default:
      return state;
  }
}

export default applications;
