const filterItems = function (method) {
  let field = Object.keys(method)[0];
  let value = method[field];
  let filteredTours = tours;
  if (field && value) {
    let mode = field.match(/\[(.*?)\]/gm);
    if (mode) {
      let validFields = [
        "id",
        "ratingsAverage",
        "ratingsQuantity",
        "duration",
        "maxGroupSize",
        "price",
      ];
      field = field.split("[")[0];
      if (mode[0] === "[lt]" && validFields.includes(field)) {
        filteredTours = tours.filter(function (tour) {
          return tour[field] < +value;
        });
      }
      if (mode[0] === "[lte]" && validFields.includes(field)) {
        filteredTours = tours.filter((tour) => tour[field] <= +value);
      }
    } else {
      filteredTours = tours.filter((tour) => String(tour[field]) === value);
    }
  }

  renderTable(filteredTours);
};
