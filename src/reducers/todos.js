import config from '../config';
const todos = (state = [], action) => {
	console.log('state', state);
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
      default:
      	return state
	}
}

export default todos;