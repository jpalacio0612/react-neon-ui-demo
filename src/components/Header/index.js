import React, { useEffect, useState } from 'react'
import { Button, cyberpunk, neon } from 'react-neon-ui'
import { useDispatch } from 'react-redux'
import { changeThemeAction } from '../../redux/actions/changeThemeAction'

export const Header = ({ title, changeTag = () => {}, hideTags = false }) => {
  const [tag, setTag] = useState('useCases')
  const dispatch = useDispatch()

  useEffect(() => {
    changeTag(tag)
  }, [tag, changeTag])

  const handleTheme = (theme) => {
    if (theme === 'Neon') {
      dispatch(changeThemeAction(neon))
    } else if (theme === 'Cyberpunk') {
      dispatch(changeThemeAction(cyberpunk))
    }
  }

  return (
    <div className='header'>
      <h2>{title}</h2>
      {!hideTags && (
        <div className='header__tags'>
          <div className='header__tags--left'>
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
          </div>
          {tag === 'useCases' && (
            <div className='header__tags--right'>
              <h3>Change Theme</h3>
              <Button onClick={() => handleTheme('Neon')} theme={neon}>
                Neon
              </Button>
              <Button
                onClick={() => handleTheme('Cyberpunk')}
                theme={cyberpunk}
              >
                CyberPunk
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
