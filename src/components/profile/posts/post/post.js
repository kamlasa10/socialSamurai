import React from 'react'
import s from './post.module.scss'
import PropTypes from 'prop-types'

const Post = ({msg}) => {
  return (
    <div className={s.post}>
      <div className={s.avatar}>
        <img src="https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg" alt="Аватар user"/>
      </div>
      <div className={s.msg}>{msg}</div>
    </div>
  )
}

Post.propTypes = {
  msg: PropTypes.string
}

export default Post