import applications from './applications';
import { combineReducers } from 'redux';
import edus from './edus';
import exps from './exps';
import jobs from './jobs';
import questions from './questions';
import { routerReducer } from 'react-router-redux';

// eslint-disable-next-line max-len
const rootReducer = combineReducers({ questions, exps, edus, jobs, applications, routing: routerReducer });

export default rootReducer;
