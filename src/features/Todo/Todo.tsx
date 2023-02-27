import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AddTask } from './components/AddTask/addTask';
import { Filters } from './components/Filters/Filters';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoContext } from './contexts/TodoProvider';
import styles from './todo.module.css';

export const Todo = (): JSX.Element => {
  const { taskState } = useContext(TodoContext);
  const { tasks } = taskState;
  useEffect(() => {
    const timeBeforeNotify = 120000;
    const calcNotifyTime = (deadlineTime: number): number => {
      const currentTime = new Date().getTime();
      return deadlineTime - currentTime - timeBeforeNotify;
    };
    const setGetTaskActive = tasks?.filter(task => !task.completed);
    setGetTaskActive?.forEach(task => {
      const deadlineTime = new Date(task?.createDate).getTime();
      const timer = calcNotifyTime(deadlineTime);
      if (timer > 0) {
        setTimeout(() => {
          void Swal.fire({
            title: `${task.description}`,
            text: 'Deadline is comming up in 2 minute',
            width: 500,
            padding: '3em',
            color: '#108cef'
          });
        }, timer);
      }
    });
    return () => {
    };
  }, [tasks]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <h1 className={styles.title}>To do list</h1>
      <Filters />
      <AddTask />
      <div className={styles.listTask}>
      {tasks?.map((task, index) => <TodoItem key={index} task={task} />)}
      </div>
      </div>
    </div>
  );
};
