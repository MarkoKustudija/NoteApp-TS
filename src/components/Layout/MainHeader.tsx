/* eslint-disable jsx-a11y/alt-text */

import React, { PropsWithChildren } from 'react'

type HeaderProps = PropsWithChildren<{
    image: {
        src: string;
        alt: string;
    }
}>

function MainHeader({image, children}: HeaderProps) {
  return (
     <header>
      <img {...image} />
      {children}
    </header>
  )
}

export default MainHeader