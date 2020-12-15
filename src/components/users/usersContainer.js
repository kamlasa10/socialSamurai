import React, {useEffect} from 'react'
import Users from '@/components/users/users';
import {connect} from 'react-redux';
import * as axios from 'axios'
import {changeCurrentPage, changeUserSubscribe, setUsers} from '@/redux/reducers/usersReducer';
import {initPagination} from '@/components/users/users.func';

const UsersContainer = (props) => {
  // eslint-disable-next-line react/prop-types
  const {setUsers, currentPage, totalCountUsers, takeUsers} = props
  const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
      "API-KEY": 'ffaa3a62-0e37-4862-99c8-b882ee8cd170'
    }
  })
  let paginationItems

  useEffect(() => {
    instance.get(`/users?count=${takeUsers}&page=${currentPage}`).then(response => {
      setUsers({users: response.data.items, totalCount: response.data.totalCount})
    })
  }, [currentPage])

  if(totalCountUsers) {
    let pages = []
    const countPages = Math.ceil(totalCountUsers / takeUsers)

    pages =
      new Array(countPages)
        .fill('')
        .map((item, i) => i + 1)

    paginationItems = initPagination(pages, currentPage)
  }

  return (
    <Users {...props} items={paginationItems} />
  )
}

const mapState = ({usersPage}) => ({
  users: usersPage.users,
  currentPage: usersPage.currentPage,
  totalCountUsers: usersPage.totalCountUsers,
  takeUsers: usersPage.takeUsers
})

const mapDispatch = {
  changeUserSubscribe,
  setUsers,
  changeCurrentPage
}

export default connect(mapState, mapDispatch)(UsersContainer)