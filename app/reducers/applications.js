/* eslint-disable no-case-declarations */

// eslint-disable-next-line max-len
import { RATE_EDUS, RATE_EXPS, RECEIVE_COMPLETE_APPLICATION, RECEIVE_REVIEWED_APPLICATIONS, RECEIVE_UNREVIEWED_APPLICATIONS, REQUEST_COMPLETE_APPLICATION, REQUEST_REVIEWED_APPLICATIONS, REQUEST_UNREVIEWED_APPLICATIONS, TOGGLE_ANONYMOUS } from '../actions/actionCreators';

const applications = (state = {
  isFetching: false,
  appsToReview: [],
  reviewedApplications: [],
  completeReviewedApplication: {}
}, action) => {
  switch (action.type) {

    // For entire application object
    case REQUEST_COMPLETE_APPLICATION:
      return Object.assign({}, state, { isFetching: true });

    case RECEIVE_COMPLETE_APPLICATION:
      // eslint-disable-next-line max-len
      return Object.assign({}, state, { isFetching: false, completeReviewedApplication: action.application });

    // For basic info about applications that have been reviewed
    case REQUEST_REVIEWED_APPLICATIONS:
      return Object.assign({}, state, { isFetching: true });

    case RECEIVE_REVIEWED_APPLICATIONS:
      // eslint-disable-next-line max-len
      return Object.assign({}, state, { isFetching: false, reviewedApplications: action.reviewedApplications });

    // For next 5 applications to reviewed
    case REQUEST_UNREVIEWED_APPLICATIONS:
      return Object.assign({}, state, { isFetching: true });

    case RECEIVE_UNREVIEWED_APPLICATIONS:
      // eslint-disable-next-line max-len
      return Object.assign({}, state, { isFetching: false, appsToReview: action.appsToReview });

    case RATE_EDUS:
      let nextAppsToReview = state.appsToReview.map((app) => {
        if (app.id !== action.appId) {
          return app;
        }

        return Object.assign({}, app, { edusRating: action.rating });
      });

      return Object.assign({}, state, { appsToReview: nextAppsToReview });

    case RATE_EXPS:
      nextAppsToReview = state.appsToReview.map((app) => {
        if (app.id !== action.appId) {
          return app;
        }

        return Object.assign({}, app, { expsRating: action.rating });
      });

      return Object.assign({}, state, { appsToReview: nextAppsToReview });

    case TOGGLE_ANONYMOUS:
      const nextReviewedApplications = state.reviewedApplications.map((app) => {
        if (app.id !== action.appId) {
          return app;
        }

        return Object.assign({}, app, { anonymous: action.isAnonymous });
      });

      // eslint-disable-next-line max-len
      const nextCompleteReviewedApplication = Object.assign({}, state.completeReviewedApplication, { anonymous: action.isAnonymous });

      return Object.assign({}, state, {
        reviewedApplications: nextReviewedApplications,
        completeReviewedApplication: nextCompleteReviewedApplication
      });

    default:
      return state;
  }
};

export default applications;
