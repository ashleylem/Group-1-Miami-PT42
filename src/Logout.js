import React from 'react';
import { useNavigate } from 'react-router-dom';

export  const Logout =()=> {
  const navigate = useNavigate();


  // Clear the user's authentication state
  function handleLogout() {
    localStorage.removeItem('jwt-token'); // or use a session cookie
    localStorage.removeItem('user-id')
    // delete any user data from state
    // ...
    return navigate('/signin'); // redirect the user to the login page
  }

  return (
    <div>
      <button className="btn ms-2 btn-danger" onClick={handleLogout}>Logout</button>
    </div>
  );
}
