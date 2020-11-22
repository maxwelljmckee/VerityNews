import React from 'react';
import { useSelector } from 'react-redux';


const UserProfile = () => {
  const user = useSelector(state => state.session.user)
  return (
    <React.Fragment>
      <h1>{user.username}</h1>
      <h3>{user.email}</h3>
    </React.Fragment>
  )
}


export default UserProfile;