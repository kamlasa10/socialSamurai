import React from 'react'
import s from './posts-form.module.scss'
import PropTypes from 'prop-types'

const PostsForm = ({currentPostText, changePostTextAction, createPostAction}) => {

  const onBtnClick = () => {
    createPostAction()
  }

  const onTextAreaChange = (e) => {
    const value = e.target.value
    changePostTextAction(value)
  }

  return (
    <div className={s.posts_form}>
      <div className="posts_title">
        My Posts
      </div>
      <div className={s.posts_area}>
        <textarea onChange={onTextAreaChange} value={currentPostText}/>
      </div>
      <div className={s.posts_btn}>
        <button onClick={onBtnClick}>Send</button>
      </div>
    </div>
  )
}

PostsForm.propTypes = {
  currentPostText: PropTypes.string.isRequired,
  changePostTextAction: PropTypes.func.isRequired,
  createPostAction: PropTypes.func.isRequired
}

export default PostsForm