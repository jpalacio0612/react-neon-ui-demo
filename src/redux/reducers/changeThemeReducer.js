import { CHANGE_THEME } from '../actions/changeThemeAction'
import { neon } from 'react-neon-ui'

export const changeThemeReducer = (state = neon, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload
    default:
      return state
  }
}
