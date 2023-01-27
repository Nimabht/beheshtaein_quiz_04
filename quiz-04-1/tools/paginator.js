const paginator = function (items, pageNumber = 1, pageSize = 5) {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};
