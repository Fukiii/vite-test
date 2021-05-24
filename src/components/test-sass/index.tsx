import React, { useState } from 'react'
import './index.scss';

export function TestSass() {

  const [style, setStyle] = useState('');

  return (
    <div className="wrapper flex-box lh-center">
      <div className="main-box">
        <h1>测试scss文件引入和语法</h1>
        <div className="circle-red"></div>
        <div className="bg-jpg"></div>
        <div className="bg-png"></div>
        <div className="bg-svg"></div>

        <div className="bg-c-png"></div>
        <p className="custom-font">测试字体引入</p>
      </div>
    </div>
  )
}
