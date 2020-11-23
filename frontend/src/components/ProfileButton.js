import React from 'react';
import { Link } from 'react-router-dom';


const ProfileButton = ({user}) => {
  return (
    <i className="fas fa-user"></i>
    // <Link to={`/users/${user.id}`} ></Link>
  )
}

export default ProfileButton;