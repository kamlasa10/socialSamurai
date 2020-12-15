export function initPagination(arrPages, currentPage) {
  return arrPages.filter(item => {
    if (item === 1 || item === arrPages.length ||
        (item + 1 <= currentPage && item + 1 >= currentPage - 3)) {
      return item
    } else if (item + 1 === currentPage
      || (item + 1 > currentPage && item + 1 <= currentPage + 3
      )) {
      return item
    } else if(item === arrPages.length - 1) {
      return '...'
    }
  }).map((item, i, arr) => {
    if(i === arr.length - 2) {
      return '...'
    }

    return item
  })
}