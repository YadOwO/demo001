import React from 'react';
import './index.css'
import {Outlet} from 'react-router-dom'

export default function Body() {
  return (
    <div className="body001">
      <Outlet/>
    </div>
  );
}
