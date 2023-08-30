import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Link to='/admin'>Dashboard</Link>
        </li>
        <li>
          <Link to='/admin/cars'>Cars</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
