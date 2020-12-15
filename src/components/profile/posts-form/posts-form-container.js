import React from 'react'
import PostsForm from '@/components/profile/posts-form/posts-form';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {changePostTextAction, createPostAction} from '@/redux/reducers/profileReducer';

const PostsFormContainer = (props) => {
  return (
    <PostsForm {...props}/>
  )
}

PostsFormContainer.propTypes = {
  currentPostText: PropTypes.string.isRequired,
  changePostTextAction: PropTypes.func.isRequired,
  createPostAction: PropTypes.func.isRequired
}

const mapState = ({profilePage: {currentPostText}}) => ({currentPostText})

export default connect(mapState, {
  changePostTextAction,
  createPostAction
})(PostsFormContainer)