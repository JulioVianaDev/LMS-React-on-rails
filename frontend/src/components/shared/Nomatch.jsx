import { Link } from "react-router-dom";

import React from 'react'

function Nomatch() {
  return (
    <>
      <h1>Error 404</h1>
      <Link to='/'>
        Go to Home
      </Link>
    </>
  )
}

export default Nomatch
