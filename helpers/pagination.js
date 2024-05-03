module.exports = (query, countProducts, limitItems) => {
  let objectPagination = {
    currentPage: 1,
    limitItems: limitItems,
  };
  if (query.page) {
    objectPagination.currentPage = +query.page;
  }

  objectPagination.skip =
    (objectPagination.currentPage - 1) * objectPagination.limitItems;

  const totalPage = Math.ceil(countProducts / objectPagination.limitItems);
  objectPagination.totalPage = totalPage;
  return objectPagination;
};
