import  * as ActionTypes from '../constants/actionTypes';
import { createStore } from 'redux';
import initialState from '../reducers/initialState';
import rootReducer from '../reducers';


describe('Store', () => {

  it('should display results when necessary data is provided', () => {
    const store = createStore(rootReducer, initialState);

    const actions = [
      { type: ActionTypes.ADD_COMBATANT, combatant: {'name':'Izzy', 'initiative': 23} },
      { type: ActionTypes.ADD_COMBATANT, combatant: {'name':'Nutmeg', 'initiative': 12} },
      { type: ActionTypes.ADD_COMBATANT, combatant: {'name':'Ea', 'initiative': 3} }
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      combatants: [
        {'name':'Izzy', 'initiative': 23},
        {'name':'Nutmeg', 'initiative': 12},
        {'name':'Ea', 'initiative': 3}
      ],
      currentTurn: 50
    };

    expect(actual.battleScreen).toEqual(expected);
  });
});
