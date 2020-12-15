import React from 'react'
import Dialogs from '@/components/dialogs/dialogs';
import {connect} from 'react-redux';

const DialogsContainer = (props) => {
  return (
    <Dialogs {...props} />
  )
}

const mapState = ({dialogsPage}) => ({
  dialogs: dialogsPage.dialogs,
  messages: dialogsPage.messages
})

export default connect(mapState, null)(DialogsContainer)