import { combineReducers } from 'redux';
import battleScreen from './battleScreenReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  battleScreen,
  routing: routerReducer
});

export default rootReducer;
