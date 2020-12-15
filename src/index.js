import ReactDOM from 'react-dom';
import App from '@/app';
import React from 'react';
import store from './redux/store'

ReactDOM.render(
  <App store={store}
  />,
  document.getElementById('root')
)

store.subscribe(() => {
  ReactDOM.render(
    <App state={store.getState()}
         store={store}
    />,
    document.getElementById('root')
  )
})
