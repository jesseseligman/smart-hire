import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import jobs from './jobs';

const rootReducer = combineReducers({ jobs, routing: routerReducer });

export default rootReducer;
