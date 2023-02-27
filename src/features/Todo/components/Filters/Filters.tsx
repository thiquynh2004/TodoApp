import React, { useContext, useEffect, useState } from 'react';
import { Types } from '../../contexts/actionTypes';
import { Task, TodoContext } from '../../contexts/TodoProvider';
import toDoApi from '../../Service/todoApis';
import styles from './filter.module.css';

export enum FILTER {
  All = 'All',
  Active = 'Active',
  Complete = 'Complete',
}
const filterOption = [
  {
    id: 1,
    label: FILTER.All
  },
  {
    id: 2,
    label: FILTER.Active
  },
  {
    id: 3,
    label: FILTER.Complete
  }
];
type PromiseVoid = () => Promise<void>;

export const Filters = (): JSX.Element => {
  const { dispatch } = useContext(TodoContext);
  const [valueOption, setValueOption] = useState(FILTER.All);
  const [taskFilter, setTaskFilter] = useState<any>([]);

  useEffect(() => {
    const getAllTask: PromiseVoid = async () => {
      const result = await toDoApi.getAllTask();
      setTaskFilter(result);
    };
    getAllTask().then(
      () => {},
      () => {}
    );
    switch (valueOption) {
      case FILTER.All:
        dispatch({
          type: Types.GET_ALL_TASK,
          payload: taskFilter
        });
        break;
      case FILTER.Active:
        dispatch({
          type: Types.GET_ALL_TASK,
          payload: taskFilter.filter((task: Task) => !task.completed)
        });
        break;
      case FILTER.Complete:
        dispatch({
          type: Types.GET_ALL_TASK,
          payload: taskFilter.filter((task: Task) => task.completed)
        });
    }
  }, [valueOption]);

  return <div className={styles.container}>
    <select className={styles.selectBox} value={valueOption} onChange={(e) => {
      setValueOption(e.target.value as FILTER);
    }}>
     {filterOption.map((item) => {
       return <option style={{ margin: '8px 8px' }} value={item.label} key={item.id}>{item.label}</option>;
     })}
     </select>
    </div>;
};
