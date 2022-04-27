import React, { useState } from 'react'
import SmallMenu from './SmallMenu'
import Navbar from './Navbar';

export default function Layout({ children,active, route }) {
  const [isLeft, SetisLeft] = useState(1);

  return (
    <>
            <Navbar active={active} isLeft={isLeft} SetisLeft={SetisLeft} route={route} />

      <SmallMenu isLeft={isLeft} active={active} SetisLeft={SetisLeft}/>
      <main>{children}</main>
    </>
  )
}