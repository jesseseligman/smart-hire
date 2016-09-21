import fetch from 'isomorphic-fetch';
import axios from 'axios';
import { push } from 'react-router-redux';

// ============================= Job Actions ================================

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

// ======================== Application Actions =============================

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

        dispatch(receiveCompleteApplication(res.data))
        return dispatch(push(`/application/${appId}`));
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
    dispatch(requestReviewedApplications());

    return axios.get(`/api/applications/rated/${jobId}`)
      .then((res) => {

        dispatch(receiveReviewedApplications(res.data));
        return dispatch(push(`/results/${jobId}`));
      })
      .catch((err) => {
        console.log(err);
      })
  };
}

export const REQUEST_UNREVIEWED_APPLICATIONS = 'REQUEST_UNREVIEWED_APPLICATIONS';
export const RECEIVE_UNREVIEWED_APPLICATIONS = 'RECEIVE_UNREVIEWED_APPLICATIONS';

export function requestUnreviewedApplications() {
  return {
    type: REQUEST_UNREVIEWED_APPLICATIONS
  };
}

export function receiveUnreviewedApplications(appsToReview) {
  return {
    type: RECEIVE_UNREVIEWED_APPLICATIONS,
    appsToReview
  };
}

export function fetchUnreviewedApplications(jobId) {
  return (dispatch) => {
    dispatch(requestUnreviewedApplications());

    return axios.get(`/api/applications/unrated/${jobId}`)
      .then((res) => {

        dispatch(receiveUnreviewedApplications(res.data));
        return dispatch(push(`/review/${jobId}/education`));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export const RATE_EDUS = 'RATE_EDUS';

export function rateEdus(appId, rating) {
  return {
    type: RATE_EDUS,
    appId,
    rating
  };
}

export function patchEdus(applications) {
  return(dispatch) => {
    const axiosCalls = [];

    for (const application of applications) {
      const { id, edusRating } = application;

      axiosCalls.push(axios.patch(`/api/applications/${id}/edus`, { edusRating }));
    }

    axios.all(axiosCalls).then((res) => {
      return;
    })
    .catch((err) => {
      console.error(err);
    });
  };
}

export const RATE_EXPS = 'RATE_EXPS';

export function rateExps(appId, rating) {
  return {
    type: RATE_EXPS,
    appId,
    rating
  };
}

export function patchExps(applications) {
  return(dispatch) => {
    const axiosCalls = [];

    for (const application of applications) {
      const { id, expsRating } = application;

      axiosCalls.push(axios.patch(`/api/applications/${id}/exps`, { expsRating }));
    }

    axios.all(axiosCalls).then((res) => {
      return;
    })
    .catch((err) => {
      console.error(err);
    });
  };
}

export const TOGGLE_ANONYMOUS = 'TOGGLE_ANONYMOUS';

export function toggleAnonymous(appId, isAnonymous) {
  return {
    type: TOGGLE_ANONYMOUS,
    appId,
    isAnonymous
  };
}

export function patchAnonymous(appId, isAnonymous) {
  return (dispatch) => {

    axios.patch(`/api/applications/${appId}/anonymous`, { isAnonymous })
      .then((res) => {
        return;
      })
      .catch((err) => {
        console.error(err);
      });
  };
}
// ============================= Edus Actions ===============================

export const REQUEST_EDUS = 'REQUEST_EDUS';
export const RECEIVE_EDUS = 'RECEIVE_EDUS';

export function requestEdus() {
  return {
    type: REQUEST_EDUS
  };
}

export function receiveEdus(edusToReview) {
  return {
    type: RECEIVE_EDUS,
    edusToReview
  };
}

export function fetchEdus(appIds) {
  return (dispatch) => {
    dispatch(requestEdus());

    const axiosCalls = [];

    for (const appId of appIds) {

      axiosCalls.push(axios.get(`/api/edus/${appId}`));
    }

    axios.all(axiosCalls).then((responses) => {
      const edus = responses.map((response) => {
        return response.data;
      })

      return dispatch(receiveEdus(edus))
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

// ============================ Exps Actions ================================

export const REQUEST_EXPS = 'REQUEST_EXPS';
export const RECEIVE_EXPS = 'RECEIVE_EXPS';

export function requestExps() {
  return {
    type: REQUEST_EXPS
  };
}

export function receiveExps(expsToReview) {
  return {
    type: RECEIVE_EXPS,
    expsToReview
  };
}

export function fetchExps(appIds, jobId) {
  return (dispatch) => {
    dispatch(requestExps());


    const axiosCalls = [];

    for (const appId of appIds) {

      axiosCalls.push(axios.get(`/api/exps/${appId}`));
    }

    axios.all(axiosCalls).then((responses) => {
      const exps = responses.map((response) => {
        return response.data;
      })

      dispatch(receiveExps(exps))
      return dispatch(push(`/review/${jobId}/experience`))
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

// ========================= Questions Actions ================================

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function requestQuestions() {
  return {
    type: REQUEST_QUESTIONS
  };
}

export function receiveQuestions(questionsToReview) {
  return {
    type: RECEIVE_QUESTIONS,
    questionsToReview
  };
}

export function fetchQuestions(appIds, jobId) {
  return (dispatch) => {
    dispatch(requestQuestions());


    const axiosCalls = [];

    for (const appId of appIds) {

      axiosCalls.push(axios.get(`/api/questions/${jobId}/${appId}`));
    }

    axios.all(axiosCalls).then((responses) => {
      const parsed = responses.map((response) => {

        return response.data;
      });

      const questions = parsed[0].map((element, index) => {

        return { question: element.question,
                 questionId: element.questionId,
                 index,
                 responses: [] };
      });

      parsed.forEach((responseSet) => {
        responseSet.forEach((response, index) => {
          delete response.question;
          delete response.questionId;

          questions[index].responses.push(response);
        })
      })

      dispatch(receiveQuestions(questions))
      return dispatch(push(`/review/${jobId}/question/${questions[0].questionId}`))
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export const RATE_RESPONSE = 'RATE_RESPONSE';

export function rateResponse(data) {
  return {
    type: RATE_RESPONSE,
    questionsIndex: data.questionsIndex,
    responseIndex: data.responseIndex,
    rating: data.rating,
    responseId: data.responseId
  };
}

// =============================== Responses Actions ===========================

export function patchResponses(responses) {
  return (dispatch) => {
    const axiosCalls = [];

    for (const response of responses) {
      const { responseId } = response;
      const responseRating = response.rating;

      axiosCalls.push(axios.patch(`/api/responses/${responseId}`, { responseRating }));
    }

    axios.all(axiosCalls).then((res) => {
      return;
    })
    .catch((err) => {
      console.error(err);
    });
  };
}
