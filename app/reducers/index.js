import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import jobs from './jobs';
import applications from './applications';
import edus from './edus';
import exps from './exps';

const rootReducer = combineReducers({ exps, edus, jobs, applications, routing: routerReducer });

export default rootReducer;
