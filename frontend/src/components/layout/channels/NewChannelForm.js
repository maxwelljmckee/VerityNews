import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postNewChannel } from '../../../store/channels';


const NewChannelForm = () => {
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState('');
  
  const [formIsHidden, setFormIsHidden] = useState(true);
  const toggleFormIsHidden = () => {
    setFormIsHidden(!formIsHidden);
  }
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewChannel({
      name: inputVal
    }))
    setInputVal('');
    setFormIsHidden(true)
  }


  return (
    <div className='new__channel__button'>
      <i className="fas fa-plus" onClick={toggleFormIsHidden} ></i>
      { !formIsHidden &&
      <div className='new__channel__form'>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            placeholder='Enter Channel Name'
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </form>
      </div>
      }
    </div>
  )
}


export default NewChannelForm;