const sortItems = function (items, method) {
  let order;
  let methodValue;
  if (method.includes("-")) {
    order = "des";
    methodValue = method.split("-")[1];
  } else {
    order = "asc";
    methodValue = method;
  }
  if (
    methodValue === "id" ||
    methodValue === "ratingAverage" ||
    methodValue === "ratingQuantity" ||
    methodValue === "duration" ||
    methodValue === "maxGroupSize" ||
    methodValue === "price"
  ) {
    items.sort((tour1, tour2) => {
      if (tour1[methodValue] < tour2[methodValue]) return 1;
      if (tour1[methodValue] > tour2[methodValue]) return -1;
      return 0;
    });
  } else {
    items.sort((tour1, tour2) => {
      if (
        String(tour1[methodValue]).toLowerCase() <
        String(tour2[methodValue]).toLowerCase()
      )
        return 1;
      if (
        String(tour1[methodValue]).toLowerCase() >
        String(tour2[methodValue]).toLowerCase()
      )
        return -1;
      return 0;
    });
  }
  if (order === "des") renderTable(items);
  if (order === "asc") renderTable(items.reverse());
};
