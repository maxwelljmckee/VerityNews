import React, { useState } from 'react';
import { useSelector } from 'react-redux'


const SourceList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const user = useSelector(state => state.session.user)

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='sources__container'>
      <div className='sources__searchbar'>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      <div className='source__card__container'>

      </div>
    </div>
  )
}


export default SourceList;