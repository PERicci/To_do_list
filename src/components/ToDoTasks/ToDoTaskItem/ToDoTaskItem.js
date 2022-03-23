import React from 'react';

import './ToDoTaskItem.css';

const ToDoTaskItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="task-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default ToDoTaskItem;
