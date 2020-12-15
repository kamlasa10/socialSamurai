import React from 'react'
import {connect} from 'react-redux';

import Profile from '@/components/profile/profile';

// eslint-disable-next-line no-unused-vars,react/prop-types
const ProfileContainer = ({posts}) => {
  return (
    <Profile posts={posts} />
  )
}

const mapState = ({profilePage}) => ({
  posts: profilePage.posts
})

export default connect(mapState, null)(ProfileContainer)