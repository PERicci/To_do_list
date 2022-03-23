import React from 'react';

import ToDoTaskItem from '../ToDoTaskItem/ToDoTaskItem';
import './ToDoTaskList.css';

const ToDoTaskList = props => {
  return (
    <ul className="task-list">
      {props.items.map(task => (
        <ToDoTaskItem
          key={task.id}
          id={task.id}
          onDelete={props.onDeleteItem}
        >
          {task.text}
        </ToDoTaskItem>
      ))}
    </ul>
  );
};

export default ToDoTaskList;
