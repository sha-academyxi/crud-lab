import cuid from 'cuid';
import { combineReducers } from 'redux';
export const cuidFn = cuid;

function restaurants(state = [], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return [...state, {id: cuidFn(), text: action.text}]
    case 'DELETE_RESTAURANT':
      return state.filter(restaurant => restaurant.id !== action.id)
    case 'UPDATE_RESTAURANT':
      return state.map(restaurant => {
        if (restaurant.id === action.restaurant.id) {
          return {...restaurant, text: action.restaurant.text}
        }
        return restaurant
      })
    default:
      return state
  }
}

function reviews(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      return [...state, {id: cuidFn(), ...action.review}]
    case 'DELETE_REVIEW':
      return state.filter(review => review.id !== action.id)
    default:
      return state
  }
}

const reducer = combineReducers({
  restaurants,
  reviews,
})
export default reducer
