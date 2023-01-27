const removeFields = function (fieldsArray) {
  if (!Array.isArray(fieldsArray)) throw new Error("Invalid Input");
  const fieldToColumn = {
    id: 1,
    name: 2,
    location: 3,
    price: 4,
    maxGroupSize: 5,
    difficulty: 6,
    duration: 7,
    ratingsAverage: 8,
    ratingQuantity: 9,
  };
  fieldsArray.forEach((field) => {
    if (!field.includes("-")) return;
    let rows = table.rows;
    let column = fieldToColumn[field.split("-")[1]];
    for (let i = 0; i < rows.length; i++) {
      rows[i].deleteCell(column);
    }
  });
};
