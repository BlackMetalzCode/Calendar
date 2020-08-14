import React from 'react';

const List = ({list, deleteItem, onClick}) => {
  return (
    <div>
      <ul>
        {list.map((item) => {
          return(
          <li key={item.id} >
          <p onClick={() => onClick(item.id)}>{item.value}</p>
          <button onClick={() => deleteItem(item.id)}>X</button>
          </li>
          )
        })}
      </ul>
    </div>
  );
};


export default (List);