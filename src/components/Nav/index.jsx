import React, { useState } from 'react';
import './index.css'
import {Link} from 'react-router-dom'

export default function Nav() {
  // const [boxWidth, changeBox] = useState(true);
  // function changeBoxWidth(){
  //   changeBox(!boxWidth)
  // }
  return (
      <div className="shell" >
        <Link to="#" className="box"><i className="iconfont icon-liebiao"></i><span>list</span></Link>
        <Link to="echart" className="box"><i className="iconfont icon-cangku"></i><span> 主页</span></Link>
        <Link to="user" className="box"><i className="iconfont icon-zhuti_tiaosepan"></i><span>用户管理</span></Link>
        <Link to="useradd" className="box"><i className="iconfont icon-qianbao"></i><span>添加用户</span></Link>
        <Link to="look" className="box"><i className="iconfont icon-tupian"></i><span>查看图书</span></Link>
        <Link to="bookaction" className="box"><i className="iconfont icon-dunpaibaoxianrenzheng"></i><span>添加图书</span></Link>
        <Link to="erweima" className="box"><i className="iconfont icon-erweima"></i><span>作者二维码</span></Link>
        <Link to="/login" className="box"><i className="iconfont icon-dengchu"></i><span>退出</span></Link>
    </div>
  );
}
