import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import jobs from './jobs';
import applications from './applications';

const rootReducer = combineReducers({ jobs, applications, routing: routerReducer });

export default rootReducer;
