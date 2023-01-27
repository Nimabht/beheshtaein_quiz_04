const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");
let queryString = new URLSearchParams(window.location.search);
const { page, limit } = Object.fromEntries(queryString.entries());
if (page && limit) {
  renderTable(paginator(tours, +page, +limit));
} else {
  renderTable(paginator(tours));
}
