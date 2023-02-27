import { useFormik } from 'formik';
import moment from 'moment';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { Types } from '../../contexts/actionTypes';
import { getAll, Task, TodoContext } from '../../contexts/TodoProvider';
import toDoApi from '../../Service/todoApis';
import styles from './addTask.module.css';

export const AddTask = (): JSX.Element => {
  const { dispatch } = useContext(TodoContext);
  const addTask = async (data: Task) => {
    try {
      const result = await toDoApi.createTask(data);
      dispatch({
        type: Types.GET_ALL_TASK,
        tasks: result.data
      });
      Swal.fire({
        icon: 'success',
        text: 'Add task successfully !',
        showConfirmButton: false,
        timer: 1500
      });
      getAll(dispatch);
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      id: Number(''),
      description: '',
      completed: false,
      createDate: ''
    },
    onSubmit: values => {
      dispatch(addTask(values));
    }
  });
  const handleChangeDate = (e: React.FormEvent<HTMLInputElement>) => {
    const createDate = moment(new Date(e.currentTarget.value)).format('MM-DD-YYYY, h:mm:ss a');
    formik.setFieldValue('createDate', createDate);
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
       <input
         id="description"
         name="description"
         type="text"
         placeholder="Add Task"
         className={styles.inputTask}
         onChange={formik.handleChange}
         value={formik.values.description}
         required
       />
       <input
         id="createDate"
         name="createDate"
         type="datetime-local"
         className={styles.inputTaskTimer}
         onChange={handleChangeDate}
         required
         min={moment(new Date()).format('YYYY-MM-DDTHH:mm')}
       />
       <button type="submit" className={styles.buttonAddTask}>ADD</button>
     </form>
      </div>
  );
};
