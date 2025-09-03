import React, { useState } from 'react'
import Followers from './Followers'
import Timer from './Timer'



function App() {

const [show, setShow] = useState(true)

  return (
    <>
    {/* <Followers/> */}

<div className="p-6">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg mb-4"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide Timer" : "Show Timer"}
      </button>

      {/* Only render Timer if show === true */}
      {show && <Timer />}
    </div>

    
    </>

  )
}

export default App