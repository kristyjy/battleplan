import * as ActionTypes from '../constants/actionTypes';
import reducer from './battleScreenReducer';

describe('Reducers::battleScreen', () => {
  const getInitialState = () => {
    return {
      combatants : []
    };
  };

  const getNewAppState = () => {
    return {
      combatants : [
        {'name':'Kristy', 'initiative': 2}
      ]
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle ADD_COMBATANT', () => {
    const action = { type: ActionTypes.ADD_COMBATANT, combatant: {'name':'Kristy', 'initiative': 2} };
    const expected = Object.assign(getNewAppState());

    expect(reducer(getInitialState(), action)).toEqual(expected);
  });

});
