import React from 'react'
import s from './paginationItem.module.scss'

const PaginationItem = ({value, changeCurrentPage, isActive}) => {
  const onButtonClickHandler = (e) => {
    const id = +(e.target.dataset.page)
    changeCurrentPage(id)
  }

  if(typeof value === 'string') {
   return <span className="button">{value}</span>
  } else {
    return <button data-page={value}
                   onClick={onButtonClickHandler}
                   className={`button ${isActive && s.active}`}>{value}</button>
  }
}

export default PaginationItem