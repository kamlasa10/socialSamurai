import React from 'react'
import s from './profile.module.scss'

import ProfileInfo from '@/components/profile/profile-info';
import Posts from '@/components/profile/posts';

import PropTypes from 'prop-types'
import PostsFormContainer from '@/components/profile/posts-form/posts-form-container';

const Profile = ({posts}) => {

  return (
    <>
      <div className={s.big_img}>
        <img
          src="https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/styles/featured_media_detail/public/OceansJames_St._JohnFlickr.jpg?B6OLz3xbs7_r_ttzkutmzDH3TsZyVnyA&itok=0DEsgy0J"
          alt=""/>
      </div>
      <ProfileInfo/>
      <PostsFormContainer/>
      <Posts posts={posts}/>
    </>
  )
}

Profile.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      msg: PropTypes.string.isRequired
    })
  )
}

export default Profile