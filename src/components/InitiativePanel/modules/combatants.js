// ------------------------------------
// Constants
// ------------------------------------
//export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
//export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
export const COMBANTANT_ADD = 'COMBANTANT_ADD'
//export const COMBANTANT_SORT = 'COMBANTANT_SORT'

// ------------------------------------
// Actions
// ------------------------------------
/*export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}*/
export function newCombatant (combatant = {'name': 'Kristy', 'initiative': 12}) {
  return {
    type : COMBANTANT_ADD,
    payload : combatant
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

/*export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 200)
    })
  }
}*/

export const actions = {
  newCombatant
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COMBANTANT_ADD]    : (state, action) => state.push(action.payload)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function combatantReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
