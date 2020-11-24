import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <div className='category__card__container'>
      {categories.map(category => {
        return (
          <NavLink key={category.name} to={`/explore/${category.name}`}>
            <div className='category__card'>
              <img className='category__image' src={category.imageUrl} alt={category.name} />
              <h2 className='category__title'>{category.name}</h2>
            </div>
          </NavLink>
        )
      })}
    </div>
  )
}


export default CategoryList;