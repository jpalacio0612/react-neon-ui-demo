import { createStore } from 'redux'
import { changeThemeReducer } from './reducers/changeThemeReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(changeThemeReducer, composeWithDevTools())
