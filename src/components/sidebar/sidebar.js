import React from 'react'
import s from './sidebar.module.scss'
import Navigation from '@/components/sidebar/navigation'
import Friends from '@/components/sidebar/friends'
import {useSelector} from 'react-redux';

const Sidebar = () => {
  const data = useSelector(({sidebar}) => ({friends: sidebar.friends}))

  return (
    <aside className={s.sidebar}>
      <Navigation/>
      <Friends friends={data.friends} />
    </aside>
  )
}

export default Sidebar