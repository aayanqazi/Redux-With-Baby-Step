import { combineReducers } from 'redux'
import todos from './Reducer/todo-reducer'
import visibilityFilter from './Reducer/VISIBLE_FILTER'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp