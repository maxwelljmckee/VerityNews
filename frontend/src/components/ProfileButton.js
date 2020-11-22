import React from 'react';
import { Link } from 'react-router-dom';


const ProfileButton = ({user}) => {
  return (
    <Link to={`/users/${user.id}`} ><i className="fas fa-user"></i></Link>
  )
}

export default ProfileButton;