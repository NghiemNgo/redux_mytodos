import config from '../config';
const todos = (state = [], action) => {
	console.log('action', action);
	switch (action.type) {
		case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          task: action.task,
          time: action.time,
          processing: config.MARK_AS_NEW
        }
      ]
    case 'SET_PROCESSING':
      return state.map(task => (task.id === action.id) 
      ? {...task, processing: action.action}
      : task);
    default:
      return state
	}
}

export default todos;