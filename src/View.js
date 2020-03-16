import React from 'react';

function View({ names, deleteName }) {
    return (
      <div className="pad10">
        <ul id="viewList">
          {names.map((name,index) => <li key={index} data-index={index + 1}>{name}<span onClick={() => { deleteName(name); }}>Delete</span></li>)}
        </ul>
      </div>
    )
}

export default View;