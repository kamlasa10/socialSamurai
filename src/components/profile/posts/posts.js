import React from 'react'
import Post from '@/components/profile/posts/post/post';

import PropTypes from 'prop-types'

const Posts = ({posts}) => {


  return (
    <div className="posts">
      {
        posts.map(({id, msg}) => <Post key={id} msg={msg} />)
      }
    </div>
  )
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      msg: PropTypes.string.isRequired
    })
  )
}

export default Posts