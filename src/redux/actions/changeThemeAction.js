export const CHANGE_THEME = 'CHANGE_THEME'

export const changeThemeAction = (data) => {
  return {
    type: CHANGE_THEME,
    payload: data
  }
}
