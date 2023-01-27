let table = document.querySelector("#table");
const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");
let queryString = new URLSearchParams(window.location.search);
const { fields } = Object.fromEntries(queryString.entries());
renderTable(tours);
if (fields) removeFields(fields.split(","));
