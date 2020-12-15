import React from 'react'
import PropTypes from 'prop-types'
import PaginationItem from '@/components/pagination/paginationItem';

const Pagination = ({items, changeCurrentPage, currentPage}) => {
  const elems = items.map(item => <PaginationItem changeCurrentPage={changeCurrentPage}
                                                  key={item}
                                                  isActive={currentPage === item}
                                                  value={item}/>)

  return (
    <div className="pagination">
      {elems}
    </div>
  )
}

Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  changeCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
}

export default Pagination