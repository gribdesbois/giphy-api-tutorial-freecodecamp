import React from 'react'

function TextList({url, gifs}) {
  const items = gifs.map((itemData) => {
    return <Item url={itemData.url} />
  })
  return <div className='text-container'>{items}</div>
}

function Item({url}) {
  return (
    <div className="gif-item">
      <img src={url} />
    </div>
  )
}

export default TextList
