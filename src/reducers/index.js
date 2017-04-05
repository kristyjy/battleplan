import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import battleScreen from './battleScreenReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  battleScreen,
  routing: routerReducer
});

export default rootReducer;
