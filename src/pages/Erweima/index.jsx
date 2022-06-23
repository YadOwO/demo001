import React from 'react';
import img from './vx.jpg'
import img2 from './vx02.jpg'
import './index.css'

export default function Erweima() {
  return (
    <div>
      <h2 >联系作者</h2>
      <img src={img} alt="authorVX" />
      <img className='vx' src={img2} alt="authorVX2" />
    </div>
  );
}
