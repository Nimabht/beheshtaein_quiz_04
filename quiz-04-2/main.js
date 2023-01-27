const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");
let queryString = new URLSearchParams(window.location.search);
const { sort } = Object.fromEntries(queryString.entries());
if (sort) {
  sortItems(tours, sort);
} else {
  renderTable(tours);
}
