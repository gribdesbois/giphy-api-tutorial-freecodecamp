import React from 'react'

function Error({isError, text}) {
  if (!isError) {
    return null
  }

  return (
    <p className='error'>
      {text}
    </p>
  )
}

export default Error
