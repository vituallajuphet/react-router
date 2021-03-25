import React from 'react'

import {
  Link
} from "react-router-dom";

function Home() {
  return (
    <div>
      Home
        <div>
            <div>
                <Link to='/login'>
                  <p>test</p>
                </Link>
            </div>
            <div>
                <Link to='/blogpost'>
                  <p>test2</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home
