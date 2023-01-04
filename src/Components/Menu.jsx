import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/update">Update</Link>
      </ul>
    </div>
  )
};

export default Menu