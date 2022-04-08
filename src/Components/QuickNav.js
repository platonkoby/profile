import React from 'react'

function QuickNav({inputRef}) {

    


  return (
    <div className='quick-nav'>
        <button ref={inputRef}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
    </div>
  )
}

export default QuickNav