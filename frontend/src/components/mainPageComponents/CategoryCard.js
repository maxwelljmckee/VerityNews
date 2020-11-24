import React from 'react';
import { NavLink } from 'react-router-dom';


const CategoryCard = ({ category }) => {
  return (
    <NavLink to={`/explore/${category.name}`}>
      <div className='category__card'>
        <img className='category__image' src={category.imageUrl} alt={category.name} />
        <h2 className='category__title'>{category.name}</h2>
      </div>
    </NavLink>
  )
}


export default CategoryCard;