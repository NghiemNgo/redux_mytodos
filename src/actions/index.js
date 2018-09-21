let nextTodoId = 0
export const addTodo = (task, time) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  task,
  time
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const setProcessing = (action, id) => ({
  type: 'SET_PROCESSING',
  action,
  id
})

export const TodoFilters = {
  SHOW_ALL: 'SHOW_TAKS_ALL',
  SHOW_NEW: 'SHOW_TAKS_NEW',
  SHOW_DOING: 'SHOW_TASK_DOING',
  SHOW_DONE: 'SHOW_TASK_DONE'
}
