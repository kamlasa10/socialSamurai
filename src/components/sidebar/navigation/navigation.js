import React from 'react'
import s from './navigation.module.scss'
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.navigation__list}>
        <li className={s.navigation__item}><NavLink activeClassName={s.active_page} to="/profile">Profile</NavLink></li>
        <li className={s.navigation__item}><NavLink activeClassName={s.active_page} to="/dialogs">Messages</NavLink></li>
        <li className={s.navigation__item}><NavLink activeClassName={s.active_page} to="/users">Users</NavLink></li>
        <li className={s.navigation__item}><NavLink activeClassName={s.active_page} to="/news">News</NavLink></li>
        <li className={s.navigation__item}><NavLink activeClassName={s.active_page} to="/music">Music</NavLink></li>
      </ul>
      <NavLink activeClassName={s.active_page} className={s.navigation__link} to="/settings">Settings</NavLink>
    </nav>
  )
}

export default Navigation