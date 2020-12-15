const CHANGE_USER_SUBSCRIBE = 'CHANGE_USER_SUBSCRIBE'
const SET_USERS = 'SET_USERS'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'

const initialState = {
  users: [],
  currentPage: 1,
  takeUsers: 5,
  totalCountUsers: null
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_SUBSCRIBE:
      const idx = state.users.findIndex(user => user.id === action.payload)
      const newUser = {...state.users[idx], followed: !state.users[idx].followed}

      return {
        ...state,
        users: [
          ...state.users.slice(0, idx),
          newUser,
          ...state.users.slice(idx + 1)
        ]
      }
    case SET_USERS:
      const {users, totalCount} = action.payload

      return {
        ...state,
        users: users,
        totalCountUsers: totalCount
      }
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }

    default:
      return state
  }
}

export const changeUserSubscribe = (payload) => ({type: CHANGE_USER_SUBSCRIBE, payload})
export const setUsers = (payload) => ({type: SET_USERS, payload})
export const changeCurrentPage = (payload) => ({type: CHANGE_CURRENT_PAGE, payload})


export default usersReducer