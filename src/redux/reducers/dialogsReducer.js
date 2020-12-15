const SEND_MSG = 'SEND_MSG'
const UPDATE_MSG_TEXT = 'UPDATE_MSG_TEXT'

const initialState = {
  messages: [
    {
      id: 1,
      msg: 'Hello Bro'
    },
    {
      id: 2,
      msg: 'Sup'
    },
    {
      id: 3,
      msg: 'YOO'
    }
  ],
  dialogs: [
    {
      id: 1,
      name: 'Vladik'
    },
    {
      id: 2,
      name: 'Sasha'
    },
    {
      id: 3,
      name: 'Smitro'
    },
    {
      id: 4,
      name: 'Sveta'
    }
  ],
  currentMsgText: '',
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MSG_TEXT:
      return {
        ...state,
        currentMsgText: action.value
      }
    case SEND_MSG:
      const data = {
        id: +Date.now(),
        msg: state.currentMsgText
      }

      return {
        ...state,
        messages: [data, ...state.messages],
        currentMsgText: ''
      }
    default:
      return state
  }
}

export const sendMsgAction = () => ({type: SEND_MSG})
export const updateMsgText = (value) => ({type: UPDATE_MSG_TEXT, value})

export default dialogsReducer