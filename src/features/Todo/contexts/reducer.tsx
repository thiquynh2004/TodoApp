import { TodoAction } from './actions';
import { Types } from './actionTypes';
import { TaskState } from './TodoProvider';

export const initialState: TaskState = {
  tasks: [],
  taskDetail: {
    id: 0,
    description: '',
    completed: false,
    createDate: ''
  }
};

export const todoReducer = (state: TaskState, action: TodoAction): TaskState => {
  switch (action.type) {
    case Types.GET_ALL_TASK:
      state.tasks = action.payload;
      return { ...state };
    case Types.ADD_TASK:
      return {
        ...state,
        tasks: action.payload
      };
    case Types.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id)
      };
    case Types.UPDATE_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((task) => task.id === action.payload.id ? { ...task, completed: !task.completed } : task
        )
      };
    case Types.EDIT_TASK:
      return {
        ...state,
        taskDetail: action.payload
      };
    case Types.GET_TASK_DETAIL:
      return {
        ...state,
        taskDetail: action.payload
      };
    case Types.CLEAR_MODAL:
      return {
        ...state,
        taskDetail: initialState.taskDetail
      };
    default:
      return state;
  }
};
