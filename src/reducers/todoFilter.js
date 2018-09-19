import { TodoFilters } from '../actions'

const todoFilter = (state = TodoFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
export default todoFilter
