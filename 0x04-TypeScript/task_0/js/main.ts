interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Mashudu",
  lastName: "Molema",
  age: 71,
  location: "Durban",
};

const student2: Student = {
  firstName: "Leanne",
  lastName: "Gundelfinger",
  age: 29,
  location: "Cape Town",
};

// 3. Store the students in an array
const studentsList: Student[] = [student1, student2];

// 4. Create a table element
const table: HTMLTableElement = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "50%";

// 5. Create and append a header row
const headerRow: HTMLTableRowElement = document.createElement("tr");

const nameHeader: HTMLTableCellElement = document.createElement("th");
nameHeader.textContent = "First Name";
nameHeader.style.border = "1px solid black";
nameHeader.style.padding = "8px";

const locationHeader: HTMLTableCellElement = document.createElement("th");
locationHeader.textContent = "Location";
locationHeader.style.border = "1px solid black";
locationHeader.style.padding = "8px";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// 6. Append a row for each student
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const nameCell: HTMLTableCellElement = document.createElement("td");
  nameCell.textContent = student.firstName;
  nameCell.style.border = "1px solid black";
  nameCell.style.padding = "8px";

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "8px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// 7. Add the table to the document body
document.body.appendChild(table);
