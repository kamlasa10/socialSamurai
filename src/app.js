import React from 'react'
import './app.scss'
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types'

import Header from '@/components/header/header';
import Sidebar from '@/components/sidebar/sidebar';
import News from '@/components/news';
import Music from '@/components/music';
import Settings from '@/components/settings';
import DialogsContainer from '@/components/dialogs/dialogs-container';
import ProfileContainer from '@/components/profile/profile-container';
import UsersContainer from '@/components/users';

const App = ({store}) => {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="wrapper">
          <Header/>
          <Sidebar/>
          <main className="content">
            <Route exact path='/profile' render={() => <ProfileContainer/>}/>
            <Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route exact path='/users' render={() => <UsersContainer/>}/>
            <Route exact path='/news' component={News}/>
            <Route exact path='/music' component={Music}/>
            <Route exact path='/settings' component={Settings}/>
          </main>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App