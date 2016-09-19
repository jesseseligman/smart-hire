import fetch from 'isomorphic-fetch';
import axios from 'axios';
import { push } from 'react-router-redux';

export const REQUEST_JOBS = 'REQUEST_JOBS';
export const RECEIVE_JOBS = 'RECEIVE_JOBS';
export const SELECT_JOB = 'SELECT_JOB';

export function requestJobs() {
  return {
    type: REQUEST_JOBS,
  };
}

export function receiveJobs(jobs) {
  return {
    type: RECEIVE_JOBS,
    jobs
  };
}

export function fetchJobs(userId) {
  return (dispatch) => {
    dispatch(requestJobs());

    return axios.get(`/api/jobs/${userId}`)
      .then((res) => {

        return dispatch(receiveJobs(res.data))
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function selectJob(job) {
  return {
    type: SELECT_JOB,
    job
  };
}

export const REQUEST_COMPLETE_APPLICATION = 'REQUEST_COMPLETE_APPLICATION';
export const RECEIVE_COMPLETE_APPLICATION = 'RECEIVE_COMPLETE_APPLICATION';

export function requestCompleteApplication() {
  return {
    type: REQUEST_COMPLETE_APPLICATION
  };
}

export function receiveCompleteApplication(application) {
  return {
    type: RECEIVE_COMPLETE_APPLICATION,
    application
  };
}

export function fetchCompleteApplication(appId) {
  return (dispatch) => {
    dispatch(requestCompleteApplication());

    return axios.get(`/api/applications/${appId}`)
      .then((res) => {

        return dispatch(receiveCompleteApplication(res.data))
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export const REQUEST_REVIEWED_APPLICATIONS = 'REQUEST_REVIEWED_APPLICATIONS';
export const RECEIVE_REVIEWED_APPLICATIONS = 'RECEIVE_REVIEWED_APPLICATIONS';

export function requestReviewedApplications() {
  return {
    type: REQUEST_REVIEWED_APPLICATIONS
  };
}

export function receiveReviewedApplications(reviewedApplications) {
  return {
    type: RECEIVE_REVIEWED_APPLICATIONS,
    reviewedApplications
  };
}

export function fetchReviewedApplications(jobId) {
  return (dispatch) => {
    dispatch(requestReviewedApplications);

    return axios.get(`/api/applications/rated/${jobId}`)
      .then((res) => {

        dispatch(receiveReviewedApplications(res.data));
        return dispatch(push(`/results/${jobId}`));
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
