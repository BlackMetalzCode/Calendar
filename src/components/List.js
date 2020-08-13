import React from 'react';

const List = ({list, deleteItem}) => {
  return (
    <div>
      <ul>
        {list.map((item) => {
          return(
          <li key={item.id}>
          {item.value}
          <button onClick={() => deleteItem(item.id)}>X</button>
          </li>
          )
        })}
      </ul>
    </div>
  );
};


export default React.memo(List);