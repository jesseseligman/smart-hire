import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import jobs from './jobs';
import applications from './applications';
import edus from './edus';

const rootReducer = combineReducers({ edus, jobs, applications, routing: routerReducer });

export default rootReducer;
