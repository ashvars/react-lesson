import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

function Add({ addName }) {

    let [name, setName] = useState('');
    let inputRef = useRef(null);
    let history = useHistory();
  
    function addNames(event) {
      event.preventDefault();
      addName(name);
      setName('');
      history.push("/view");
    }
  
    useEffect(() => {
      inputRef.current.focus();
    })
    
    return (
      <div className="pad10">
        <form onSubmit={(e) => {addNames(e)}}>
          <label for="personName">Enter a name</label>
          <input type="text" name="personName" id="personName" ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
          <input type="submit" value="Add to List" />
        </form>
      </div>
    )
}

export default Add;