const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'
const CREATE_POST = 'CREATE-POST'

const initialState = {
  posts: [
    {
      id: 1,
      msg: 'Hello all'
    },
    {
      id: 2,
      msg: 'Its my first post'
    },
    {
      id: 3,
      msg: 'I love react'
    }
  ],
    currentPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      const data = {
        msg: state.currentPostText,
        id: +Date.now().toString()
      }
      state.currentPostText = ''

      return {
        ...state,
        posts: [data, ...state.posts]
      }
    case CHANGE_POST_TEXT:
      return {
        ...state,
        currentPostText: action.value
      }
    default:
      return state
  }
}

export const changePostTextAction = (value) => ({type: CHANGE_POST_TEXT, value})
export const createPostAction = () => ({type: CREATE_POST})

export default profileReducer