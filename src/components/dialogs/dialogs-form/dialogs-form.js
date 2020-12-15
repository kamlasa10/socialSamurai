import React from 'react'
import PropTypes from 'prop-types'

const DialogsForm = ({currentMsgText, updateMsgText,sendMsgAction}) => {
  const changeAreaText = (e) => {
    const value = e.target.value
    updateMsgText(value)
  }

  const onFormSubmitHandler = (e) => {
    e.preventDefault()
    sendMsgAction(currentMsgText)
  }

  return (
    <form onSubmit={onFormSubmitHandler} className="dialogs_form">
      <div>
        <textarea onChange={changeAreaText} value={currentMsgText}></textarea>
      </div>
      <div>
        <button>send</button>
      </div>
    </form>

  )
}

DialogsForm.propTypes = {
  currentMsgText: PropTypes.string.isRequired,
  sendMsgAction: PropTypes.func.isRequired,
  updateMsgText: PropTypes.func.isRequired
}

export default DialogsForm