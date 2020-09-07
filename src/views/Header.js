import React from 'react';

export default function Header({ balance }) {
  return (
    <>
      <div className='divider'></div>
      <div className='logoText'>I SMART</div>
      <div className='header cardHeader right'>
        Balance: {balance}
      </div>
    </>
  )
}