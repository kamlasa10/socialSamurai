import React from 'react'
import PropTypes from 'prop-types'
import s from './userItem.module.scss'

const UserItem = ({
  avatar,
  name,
  status,
  followed,
  photos: {
    small
  } = {},
  changeUserSubscribe,
  id
} = {}) => {
  const onBtnClickHandler = () => {
    changeUserSubscribe(id)
  }

  const isFollowed = followed ? <button onClick={onBtnClickHandler} className="btn" type="button">Follow</button> : <button onClick={onBtnClickHandler} className="btn" type="button">UnFollow</button>

  return (
    <div className="item">
      <div className="item__left">
        <div className={s.avatar}>
          <img src={avatar ? avatar : 'https://semantic-ui.com/images/avatar/large/steve.jpg'} alt=""/>
        </div>
        {isFollowed}
      </div>
      <div className="info">
        <div className="info__item">
          <div className="item__left">
            <div className="name text">{name}</div>
            <div className="status">{status}</div>
          </div>
          <div className="item__right text">
            <div className="country text">{}</div>
            <div className="text">{}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  photos: PropTypes.shape({
    small: PropTypes.any,
    large: PropTypes.any
  }),
  followed: PropTypes.bool,
  id: PropTypes.number.isRequired,
  changeUserSubscribe: PropTypes.func.isRequired,
}

export default UserItem