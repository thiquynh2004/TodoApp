import { Types } from './actionTypes';
import { Task } from './TodoProvider';

export interface GetAllTask{
  type: Types.GET_ALL_TASK
  payload: Task[]
}
export interface AddTask{
  type: Types.ADD_TASK
  payload: Task[]
}
export interface DeleteTask{
  type: Types.DELETE_TASK
  payload: { id: number, tasks: Task[] }
}
export interface UpdateStatus{
  type: Types.UPDATE_STATUS
  payload: { id: number, tasks: Task[] }
}
export interface EditTask{
  type: Types.EDIT_TASK
  payload: Task
}
export interface GetTaskDetail{
  type: Types.GET_TASK_DETAIL
  payload: Task
}
export interface ClearModal{
  type: Types.CLEAR_MODAL
  payload: Task
}

export type TodoAction = GetAllTask | AddTask | DeleteTask | UpdateStatus | EditTask | GetTaskDetail | ClearModal
