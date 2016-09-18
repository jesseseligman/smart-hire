import fetch from 'isomorphic-fetch';
import axios from 'axios';

export const REQUEST_JOBS = 'REQUEST_JOBS';
export const RECEIVE_JOBS = 'RECEIVE_JOBS';

export function requestJobs() {
  return {
    type: REQUEST_JOBS,
  }
}

export function receiveJobs(jobs) {
  return {
    type: RECEIVE_JOBS,
    jobs
  }
}

export function fetchJobs(userId) {
  return (dispatch) => {
    dispatch(requestJobs());

    return axios.get(`/api/jobs/${userId}`)
      .then((res) => {

        return res.data;
      })
      .then((jobs) => {
        return dispatch(receiveJobs(jobs))
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
