


function jobs(state={
  isFetching: false,
  items: [] }, action) {
  switch(action.type) {
    case 'REQUEST_JOBS':
      return Object.assign({}, state, {isFetching: true})

    case 'RECEIVE_JOBS':
      return Object.assign({}, state, {isFetching: false, items: action.jobs});

    default:
      return state;
  }
}

export default jobs;
