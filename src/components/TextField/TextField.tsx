import React, { useContext, useState } from 'react';
import { TodoContext } from '../../features/Todo/contexts/TodoProvider';
import { DatePickerTask } from '../DatePicker/DatePickerTask';
import styles from './textfield.module.css';
import { Types } from '../../features/Todo/contexts/actionTypes';
export const TextField = (): JSX.Element => {
  const [input, setInput] = useState('');
  const { dispatch } = useContext(TodoContext);
  const addTask = (): void => {
    dispatch({
      type: Types.ADD_TASK, description: input
    });
    setInput('');
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <input className={styles.inputTask} placeholder="Add task" onChange={(e) => setInput(e.target.value)}/>
        <DatePickerTask/>
        <button className={styles.buttonAddTask} onClick={addTask} >Add</button>
      </div>
    </div>
  );
};
