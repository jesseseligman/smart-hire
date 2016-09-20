import { REQUEST_COMPLETE_APPLICATION, RECEIVE_COMPLETE_APPLICATION, REQUEST_REVIEWED_APPLICATIONS, RECEIVE_REVIEWED_APPLICATIONS, REQUEST_UNREVIEWED_APPLICATIONS, RECEIVE_UNREVIEWED_APPLICATIONS, RATE_EDUS } from '../actions/actionCreators';


function applications(state={
  isFetching: false,
  appsToReview: [],
  reviewedApplications: [],
  completeReviewedApplication: {}
  }, action) {
  switch(action.type) {
    // For entire application object
    case REQUEST_COMPLETE_APPLICATION:
      return Object.assign({}, state, {isFetching: true});

    case RECEIVE_COMPLETE_APPLICATION:
      return Object.assign({}, state, {isFetching: false, completeReviewedApplication: action.application});

    // For basic info about applications that have been reviewed
    case REQUEST_REVIEWED_APPLICATIONS:
      return Object.assign({}, state, {isFetching: true});

    case RECEIVE_REVIEWED_APPLICATIONS:
      return Object.assign({}, state, {isFetching: false, reviewedApplications: action.reviewedApplications});

    // For next 5 applications to reviewed
    case REQUEST_UNREVIEWED_APPLICATIONS:
      return Object.assign({}, state, {isFetching: true});

    case RECEIVE_UNREVIEWED_APPLICATIONS:
      return Object.assign({}, state, {isFetching: false, appsToReview: action.appsToReview });

    case RATE_EDUS:
      const nextAppsToReview = state.appsToReview.map((app) => {
        if (app.id !== action.appId) {

          return app;
        }

        return Object.assign({}, app, { eduRating: action.rating });
      })

      return Object.assign({}, state, { appsToReview: nextAppsToReview });

    default:
      return state;
  }
}

export default applications;
