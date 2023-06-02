// Get the timestamp of the due date
var dateStart = Date.UTC(2023, 5, 3, 22, 59, 0);
var dateEnd = Date.UTC(2023, 5, 10, 22, 59, 0);

var startDate = new Intl.DateTimeFormat('ja-JP', { dateStyle: 'medium', timeStyle: 'short'}).format(dateStart);
var dueDate = new Intl.DateTimeFormat('ja-JP', { dateStyle: 'medium', timeStyle: 'short'}).format(dateEnd);

var startDateEl = document.getElementById("startDate");
startDateEl.textContent = startDate;
var dueDateEl = document.getElementById("dueDate");
dueDateEl.textContent = dueDate;