const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");
let queryString = new URLSearchParams(window.location.search);
const param = Object.fromEntries(queryString.entries());
filterItems(param);
