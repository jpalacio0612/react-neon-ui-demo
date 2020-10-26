import React, { useEffect, useState } from 'react'

export const Header = ({ title, changeTag = () => {}, hideTags = false }) => {
  const [tag, setTag] = useState('general')

  useEffect(() => {
    changeTag(tag)
  }, [tag, changeTag])

  return (
    <div className='header'>
      <h2>{title}</h2>
      {!hideTags && (
        <>
          <button
            onClick={() => setTag('general')}
            className={tag === 'general' ? 'tagselect' : 'tagunselect'}
          >
            General
          </button>
          <button
            onClick={() => setTag('useCases')}
            className={tag === 'useCases' ? 'tagselect' : 'tagunselect'}
          >
            Use Cases
          </button>
        </>
      )}
    </div>
  )
}
