import React from 'react'
import {useRoutes} from 'react-router-dom'
import routers from './routers'


export default function App() {
  const el = useRoutes(routers)
  return (
    <div>
        {el}
    </div>
  )
}
// import React from 'react';
// import { Button } from 'antd';
// import './App.less';

// const App = () => (
//   <div className="App">
//     <Button type="primary">Button</Button>
//   </div>
// );

// export default App;
