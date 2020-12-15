import React from 'react'
import s from './friends.module.scss'

import PropTypes from 'prop-types'
import FriendItem from '@/components/sidebar/friends/friend-item';

const Friends = ({friends}) => {
  const elems = friends.map(friend => (<FriendItem key={friend.id} friendInfo={friend} />))

  return (
    <div className={s.friends}>
      <h3 className={s.title}>Friends</h3>
      <div className={s.friends_list}>
        {elems}
      </div>
    </div>
  )
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }))
}

export default Friends