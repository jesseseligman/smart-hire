// eslint-disable-next-line max-len
import { RECEIVE_JOBS, REQUEST_JOBS, SELECT_JOB } from '../actions/actionCreators';

const jobs = (state = {
  isFetching: false,
  items: [] }, action) => {
  switch (action.type) {
    case SELECT_JOB:
      return Object.assign({}, state, { selectedJob: action.job });

    case REQUEST_JOBS:
      return Object.assign({}, state, { isFetching: true });

    case RECEIVE_JOBS:
      // eslint-disable-next-line max-len
      return Object.assign({}, state, { isFetching: false, items: action.jobs });

    default:
      return state;
  }
};

export default jobs;
