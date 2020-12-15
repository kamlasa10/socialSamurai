import React from 'react'
import s from './profile-info.module.scss'

const ProfileInfo = () => {
  return (
    <div className={s.profile_info}>
      <div className={s.img}>
        <img src="https://html5css.ru/w3images/avatar2.png" alt=""/>
      </div>
      <div className={s.info}>
        <div className={s.title}>Dmitry K.</div>
        <ul className={s.list}>
          <li className={s.item}>
            Date of Birth: 2 january
          </li>
          <li className={s.item}>
            City: Minsk
          </li>
          <li className={s.item}>
            Education: Bsu11
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo