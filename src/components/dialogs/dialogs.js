import React from 'react'
import s from './dialogs.module.scss'
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types'

import DialogsFormContainer from '@/components/dialogs/dialogs-form/dialogs-form-container';

const DialogItem = ({id, name}) => {
  return (
    <NavLink to={`/dialogs/${id}`} className={s.dialogs_item}>{name}</NavLink>
  )
}

DialogItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
}

const Message = ({msg}) => {
  return (
    <div className={s.dialogs_msg}>{msg}</div>
  )
}

Message.propTypes = {
  msg: PropTypes.string,
  id: PropTypes.number
}

const Dialogs = (
  {
    dialogs,
    messages,}
  ) => {

  return (
    <div className={s.dialogs}>
      <h1>Dialogs</h1>
      <div className={s.dialogs_wrap}>
        <div className={s.dialogs_items}>
          {
            dialogs.map(item => <DialogItem key={item.id} {...item} />)
          }
        </div>
        <div className={s.dialogs_msgs}>
          {
            messages.map(item => <Message key={item.id} {...item} />)
          }
          <DialogsFormContainer/>
        </div>
      </div>
    </div>
  )
}

Dialogs.propTypes = {
  data: PropTypes.object,
  dialogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })),
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    msg: PropTypes.string.isRequired
  })),
  currentMsgText: PropTypes.string
}

export default Dialogs