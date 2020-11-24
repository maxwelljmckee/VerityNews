import React from 'react';


const SourceCard = ({ source }) => {
  return (
    <div className='source__card'>
      <img src={source.imageUrl} alt={source.name} />
    </div>
  )
}


export default SourceCard;