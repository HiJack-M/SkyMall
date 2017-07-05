
import { combineReducers } from 'redux'

// init state
// const initState = {
//   count: 0
// }

// action type
export const ADD_COUNT = 'ADD_COUNT'

// action creator
export function addCount (count) {
  return {
    type: ADD_COUNT,
    count
  }
}

function count (state = 0, action) {
  switch (action.type) {
    case ADD_COUNT:
      return state + action.count
    default:
      return state
  }
}

export default combineReducers({
  count
})
