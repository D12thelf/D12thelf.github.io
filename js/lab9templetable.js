//DEFINING TABLE Use Java Script Program that outputs an oldest running temple of the church from a limited list.

//INPUT: Use the provided Temple Table for input.
//PROCESSING: Use a Loop Structure to find the oldest operating temple by operating year.
//OUTPUT: Output by provided HTML

//INPUT
let table = document.getElementById("templeData");
let oldestoperating = parseInt(table.rows[1].cells[1].innerHTML);
let temple = table.rows[1].cells[0].innerHTML;
console.table(table);

parseInt(table.rows[1].cells[1].innerHTML);
//PROCESSING
for (let i = 1; i < table.rows.length; i++) {
  let year = parseInt(table.rows[i].cells[1].innerHTML);
  if (oldestoperating > year) {
    oldestoperating = year;
    temple = table.rows[i].cells[0].innerHTML;
  }
}

//OUTPUT
document.getElementById("output").innerHTML = temple;