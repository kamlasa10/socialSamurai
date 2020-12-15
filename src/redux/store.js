import {combineReducers,
  compose, createStore, applyMiddleware
} from 'redux';
import profileReducer from '@/redux/reducers/profileReducer';
import dialogsReducer from '@/redux/reducers/dialogsReducer';
import sidebarReducer from '@/redux/reducers/sidebarReducer';
import usersReducer from '@/redux/reducers/usersReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer
})

const store = createStore(reducers, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunk
  )
))

export default store