/* eslint-disable no-console */
import axios from 'axios';
import cookie from 'react-cookie';
import { push } from 'react-router-redux';

// ============================= Job Actions ================================

export const REQUEST_JOBS = 'REQUEST_JOBS';
export const RECEIVE_JOBS = 'RECEIVE_JOBS';
export const SELECT_JOB = 'SELECT_JOB';

export const requestJobs = () => {
  return {
    type: REQUEST_JOBS
  };
};

export const receiveJobs = (jobs) => {
  return {
    type: RECEIVE_JOBS,
    jobs
  };
};

export const fetchJobs = (userId) => {
  return (dispatch) => {
    dispatch(requestJobs());

    return axios.get(`/api/jobs/${userId}`)
      .then((res) => {
        return dispatch(receiveJobs(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const selectJob = (job) => {
  return {
    type: SELECT_JOB,
    job
  };
};

// ======================== Application Actions =============================

export const REQUEST_COMPLETE_APPLICATION = 'REQUEST_COMPLETE_APPLICATION';
export const RECEIVE_COMPLETE_APPLICATION = 'RECEIVE_COMPLETE_APPLICATION';

export const requestCompleteApplication = () => {
  return {
    type: REQUEST_COMPLETE_APPLICATION
  };
};

export const receiveCompleteApplication = (application) => {
  return {
    type: RECEIVE_COMPLETE_APPLICATION,
    application
  };
};

export const fetchCompleteApplication = (appId) => {
  return (dispatch) => {
    dispatch(requestCompleteApplication());

    return axios.get(`/api/applications/${appId}`)
      .then((res) => {
        dispatch(receiveCompleteApplication(res.data));

        return dispatch(push(`/application/${appId}`));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const REQUEST_REVIEWED_APPLICATIONS = 'REQUEST_REVIEWED_APPLICATIONS';
export const RECEIVE_REVIEWED_APPLICATIONS = 'RECEIVE_REVIEWED_APPLICATIONS';

export const requestReviewedApplications = () => {
  return {
    type: REQUEST_REVIEWED_APPLICATIONS
  };
};

export const receiveReviewedApplications = (reviewedApplications) => {
  return {
    type: RECEIVE_REVIEWED_APPLICATIONS,
    reviewedApplications
  };
};

export const fetchReviewedApplications = (jobId) => {
  return (dispatch) => {
    dispatch(requestReviewedApplications());

    return axios.get(`/api/applications/rated/${jobId}`)
      .then((res) => {
        dispatch(receiveReviewedApplications(res.data));

        return dispatch(push(`/results/${jobId}`));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// eslint-disable-next-line max-len
export const REQUEST_UNREVIEWED_APPLICATIONS = 'REQUEST_UNREVIEWED_APPLICATIONS';

// eslint-disable-next-line max-len
export const RECEIVE_UNREVIEWED_APPLICATIONS = 'RECEIVE_UNREVIEWED_APPLICATIONS';

export const requestUnreviewedApplications = () => {
  return {
    type: REQUEST_UNREVIEWED_APPLICATIONS
  };
};

export const receiveUnreviewedApplications = (appsToReview) => {
  return {
    type: RECEIVE_UNREVIEWED_APPLICATIONS,
    appsToReview
  };
};

export const fetchUnreviewedApplications = (jobId) => {
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
};

export const RATE_EDUS = 'RATE_EDUS';

export const rateEdus = (appId, rating) => {
  return {
    type: RATE_EDUS,
    appId,
    rating
  };
};

export const patchEdus = (applications) => {
  return () => {
    const axiosCalls = [];

    for (const application of applications) {
      const { id, edusRating } = application;

      // eslint-disable-next-line max-len
      axiosCalls.push(axios.patch(`/api/applications/${id}/edus`, { edusRating }));
    }

    axios.all(axiosCalls).then((_res) => {
      return;
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

export const RATE_EXPS = 'RATE_EXPS';

export const rateExps = (appId, rating) => {
  return {
    type: RATE_EXPS,
    appId,
    rating
  };
};

export const patchExps = (applications) => {
  return () => {
    const axiosCalls = [];

    for (const application of applications) {
      const { id, expsRating } = application;

      // eslint-disable-next-line max-len
      axiosCalls.push(axios.patch(`/api/applications/${id}/exps`, { expsRating }));
    }

    axios.all(axiosCalls).then((_res) => {
      return;
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

export const TOGGLE_ANONYMOUS = 'TOGGLE_ANONYMOUS';

export const toggleAnonymous = (appId, isAnonymous) => {
  return {
    type: TOGGLE_ANONYMOUS,
    appId,
    isAnonymous
  };
};

export const patchOverallScores = (apps) => {
  return (dispatch) => {
    const axiosCalls = [];

    for (const app of apps) {
      axiosCalls.push(axios.patch(`/api/applications/${app.id}/overallScore`));
    }

    axios.all(axiosCalls).then((_res) => {
      return dispatch(push(`/dashboard/${cookie.load('userId')}`));
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

export const patchAnonymous = (appId, isAnonymous) => {
  return () => {
    axios.patch(`/api/applications/${appId}/anonymous`, { isAnonymous })
      .then((_res) => {
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// ============================= Edus Actions ===============================

export const REQUEST_EDUS = 'REQUEST_EDUS';
export const RECEIVE_EDUS = 'RECEIVE_EDUS';

export const requestEdus = () => {
  return {
    type: REQUEST_EDUS
  };
};

export const receiveEdus = (edusToReview) => {
  return {
    type: RECEIVE_EDUS,
    edusToReview
  };
};

export const fetchEdus = (appIds) => {
  return (dispatch) => {
    dispatch(requestEdus());
    const axiosCalls = [];

    for (const appId of appIds) {
      axiosCalls.push(axios.get(`/api/edus/${appId}`));
    }

    axios.all(axiosCalls).then((responses) => {
      const edus = responses.map((response) => {
        return response.data;
      });

      return dispatch(receiveEdus(edus));
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

// ============================ Exps Actions ================================

export const REQUEST_EXPS = 'REQUEST_EXPS';
export const RECEIVE_EXPS = 'RECEIVE_EXPS';

export const requestExps = () => {
  return {
    type: REQUEST_EXPS
  };
};

export const receiveExps = (expsToReview) => {
  return {
    type: RECEIVE_EXPS,
    expsToReview
  };
};

export const fetchExps = (appIds, jobId) => {
  return (dispatch) => {
    dispatch(requestExps());

    const axiosCalls = [];

    for (const appId of appIds) {
      axiosCalls.push(axios.get(`/api/exps/${appId}`));
    }

    axios.all(axiosCalls).then((responses) => {
      const exps = responses.map((response) => {
        return response.data;
      });

      dispatch(receiveExps(exps));

      return dispatch(push(`/review/${jobId}/experience`));
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

// ========================= Questions Actions ================================

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const requestQuestions = () => {
  return {
    type: REQUEST_QUESTIONS
  };
};

export const receiveQuestions = (questionsToReview) => {
  return {
    type: RECEIVE_QUESTIONS,
    questionsToReview
  };
};

export const fetchQuestions = (appIds, jobId) => {
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
        });
      });

      dispatch(receiveQuestions(questions));

      // eslint-disable-next-line max-len
      return dispatch(push(`/review/${jobId}/question/${questions[0].questionId}`));
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

export const RATE_RESPONSE = 'RATE_RESPONSE';

export const rateResponse = (data) => {
  return {
    type: RATE_RESPONSE,
    questionsIndex: data.questionsIndex,
    responseIndex: data.responseIndex,
    rating: data.rating,
    responseId: data.responseId
  };
};

// =============================== Responses Actions ===========================

export const patchResponses = (responses) => {
  return () => {
    const axiosCalls = [];

    for (const response of responses) {
      const { responseId } = response;
      const responseRating = response.rating;

      // eslint-disable-next-line max-len
      axiosCalls.push(axios.patch(`/api/responses/${responseId}`, { responseRating }));
    }

    axios.all(axiosCalls).then((_res) => {
      return;
    })
    .catch((err) => {
      console.error(err);
    });
  };
};

// ============================ Registration Form Actions ======================

export const submitRegistration = (user) => {
  return (dispatch) => {
    axios.post('/api/users', user)
      .then((res) => {
        const registeredUser = res.data;

        return dispatch(push(`/dashboard/${registeredUser.id}`));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// =============================== Login Actions =============================

export const submitLogin = (credentials) => {
  return (dispatch) => {
    axios.post('/api/token', credentials)
      .then((res) => {
        const { id } = res.data;

        return dispatch(push(`/dashboard/${id}`));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.log('login error');
        }
        else {
          console.log('uh oh we messed up.');
        }
      });
  };
};

export const submitLogout = () => {
  return (dispatch) => {
    axios.delete('/api/token')
      .then(() => {
        return dispatch(push('/'));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
