var students =
    [{ "FirstName": "Petar", "LastName": "Ivanov", "Grade": "5" },
    { "FirstName": "Ivan", "LastName": "Petrov", "Grade": "3" },
    { "FirstName": "Hitar", "LastName": "Petar", "Grade": "4" },
    { "FirstName": "Kotio", "LastName": "Haralanov", "Grade": "2" },
    { "FirstName": "Niki", "LastName": "Iliev", "Grade": "5" }, ];

var grid = {
    students: [],
    initialize: function (parentSelector) {
        this.gridHolder = $(parentSelector);
    },
    addStudent: function (student) {
        if (!student.FirstName || !student.LastName) {
            throw { message: "Trying to add an non-student object to array of students" };
        }

        this.students.push(student);
    },
    loadArrayOfStudents: function (arrayStudents) {
        if (!(arrayStudents instanceof Array)) {
            throw new {message: "Passed an non-array object for array of students!"};
        }
        var len = arrayStudents.length;
        for (var i = 0; i < len; i++) {
            this.addStudent(arrayStudents[i]);
        }
    },
    render: function () {
        this.gridHolder.children().remove();

        if (this.students.length == 0) {
            throw new {message:"Trying to render an empty array of students."};
        }
        this.table = $("<table></table>");
        this.addHeader();

        var i, len = this.students.length;

        for (i = 0; i < len; i++) {
            this.addRow(this.students[i]);
        }
        
        this.gridHolder.append(this.table);
    },
    addHeader: function () {
        var tableHeaderRow = $("<tr></tr>");
        this.table.append(tableHeaderRow);
        var student = this.students[0];
        var prop;
        for (var prop in student) {
            tableHeaderRow.append($("<th>" + prop + "</th>"));
        }
    },
    addRow: function (student) {        
        var nextRow = $("<tr>");
        var cell = $("<td>");
        for (var prop in student) {            
            var nextCell = cell.clone();
            nextCell.text(student[prop]);
            nextRow.append(nextCell);
        }
       
        this.table.append(nextRow);
    }
}

$(document).ready(function () {
    grid.initialize('#grid-holder');

    //$.getJSON("students.json", "", function (data) {
    //    grid.loadArrayOfStudents(data);
    //});
    grid.loadArrayOfStudents(students);

    grid.render();

    grid.loadArrayOfStudents(students);

    grid.render();
});