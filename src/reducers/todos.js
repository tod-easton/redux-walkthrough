import {
  ADD_TODO,
} from '../actions'

const initialState = {
  all: [],
}

export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        all: action.payload
      }
    default:
      return state
  }
}