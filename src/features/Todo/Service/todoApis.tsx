import { Task } from '../contexts/TodoProvider';
import axiosClient from './axiosClient';

const toDoApi = {
  async getAllTask () {
    const res = await axiosClient.get('/task');
    return res;
  },
  async getTaskDetail (id: number) {
    return await axiosClient.get<Task>(`/task/${id}`);
  },
  async createTask (data: Task) {
    return await axiosClient.post<Task>('/task', data);
  },
  async editTask (id: number, data: Task) {
    return await axiosClient.put<Task>(`/task/${id}`, data);
  },
  async deleteTask (id: number) {
    return await axiosClient.delete<Task[]>(`/task/${id}`);
  }
};
export default toDoApi;
