if (localStorage.pagecount) {
    localStorage.pagecount = Number(localStorage.pagecount) + 1;
} else {
    localStorage.pagecount = 1;
}
document.write("Visits: " + localStorage.pagecount + " time(s).");
