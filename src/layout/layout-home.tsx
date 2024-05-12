// import React from 'react'
import HeaderHome from './header/header'

// function LayoutHome(main : JSX.Element) {
//   return (
//     <><HeaderHome/>{main}</>
//   )
// }

// export default LayoutHome
import React, { ReactNode } from 'react';

type LayoutHomeProps = {
  main: ReactNode; // Define the type of 'main' prop as ReactNode
}

function LayoutHome({ main }: LayoutHomeProps) {
  return (
    <><HeaderHome/>{main}</>
  )
}

export default LayoutHome;