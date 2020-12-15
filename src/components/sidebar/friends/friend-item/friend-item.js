import React from 'react'
import s from '@/components/sidebar/friends/friends.module.scss'

import PropTypes from 'prop-types'

const FriendItem = ({friendInfo}) => {
  const {avatar, name} = friendInfo

  return (
    <div className={s.friend}>
      <div className={s.avatar}>
        <img src={avatar} alt=""/>
      </div>
      <div className={s.name}>{name}</div>
    </div>
  )
}

FriendItem.propTypes = {
  friendInfo: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string
  })
}

export default FriendItem