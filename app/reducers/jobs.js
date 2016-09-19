import { REQUEST_JOBS, RECEIVE_JOBS, SELECT_JOB } from '../actions/actionCreators';

function jobs(state={
  isFetching: false,
  items: [] }, action) {
  switch(action.type) {
    case SELECT_JOB:
      return Object.assign({}, state, {selectedJob: action.job});

    case REQUEST_JOBS:
      return Object.assign({}, state, {isFetching: true});

    case RECEIVE_JOBS:
      return Object.assign({}, state, {isFetching: false, items: action.jobs});

    default:
      return state;
  }
}

export default jobs;
