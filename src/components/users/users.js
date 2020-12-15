import React from 'react'
import PropTypes from 'prop-types'

import UserItem from '@/components/users/userItem';
import Pagination from '@/components/pagination/pagination';

const Users = ({
                 users,
                 changeUserSubscribe,
                 changeCurrentPage,
                 items,
                 currentPage
               }) => {

  const elems = users.map(user => <UserItem key={user.id}
                                            changeUserSubscribe={changeUserSubscribe}
                                            {...user} />)
  return (
    <div className="users">
      <h1>Users</h1>
      <div className="list">
        {elems}
      </div>
      {items && <Pagination currentPage={currentPage} changeCurrentPage={changeCurrentPage} items={items}/>}
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    avatar: PropTypes.string,
    followed: PropTypes.bool,
    location: PropTypes.shape({
      country: PropTypes.string,
      city: PropTypes.string
    })
  })),
  changeUserSubscribe: PropTypes.func.isRequired,
  changeCurrentPage: PropTypes.func.isRequired,
  items: PropTypes.array,
  currentPage: PropTypes.number
}

export default Users