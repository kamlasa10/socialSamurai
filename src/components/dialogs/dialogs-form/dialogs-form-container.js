import React from 'react'
import DialogsForm from '@/components/dialogs/dialogs-form/dialogs-form';
import {connect} from 'react-redux';
import {sendMsgAction, updateMsgText} from '@/redux/reducers/dialogsReducer';

const DialogsFormContainer = (props) => {
  return (
    <DialogsForm {...props}/>
    )
}

const mapState = ({dialogsPage}) => ({
  currentMsgText: dialogsPage.currentMsgText
})

const mapDispatch = {
  updateMsgText,
  sendMsgAction
}

export default connect(mapState, mapDispatch)(DialogsFormContainer)