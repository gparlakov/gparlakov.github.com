if (!Object.create) {
    Object.create = function (obj) {
        var f = new function () { };
        f.protrotype = obj;
        return new f();
    };
}

Object.prototype.extend = function (properties) {
    var extendedObject = function () { };
    extendedObject.prototype = Object.create(this);
    for (var prop in properties) {
        extendedObject.prototype[prop] = properties[prop];
    }
    extendedObject.prototype._super = this;

    return new extendedObject();
}

var SchoolsRepositoryNS = (function () {
   
    var Person = {
        init: function (fname, lname, age) {
            this.fname = fname;
            this.lname = lname;
            this.age = age;
        },
        introduce: function () {
            var intro = new String();
            intro = 'Name: '+this.fname + ' ' + this.lname + ' Age: ' + this.age;
            return intro;
        }
    };

    Student = Person.extend({
        init: function init(fname, lname, age, grade) {
            this._super.init.apply(this, arguments); // called like this to circle around the bug that Joro was talking about
            this.grade = grade;
        },
        introduce: function () {
            var intro = this._super.introduce.apply(this);
            intro += ' Grade:' + this.grade;
            return intro;
        }
    });

    var Teacher = Person.extend({
        init: function (fname, lname, age, speciality) {
            this._super.init.apply(this, arguments);
            this.speciality = speciality;
        },
        introduce: function () {
            var result = this._super.introduce.apply(this);
            result += ' Spciality:' + this.speciality;

            return result;
        }
    });
    
    var SchoolClass = {
        init: function (name, teacher, capacityOfStudents) {
            this.name = name;
            this.formTeacher = teacher;
            this.capacityOfStudents = capacityOfStudents;
        },
        addTeacher: function (teacher) {
            this.formTeacher = teacher;
        },
        addStudent: function (student) {
            if (!this.students) {
                this.students = [];
            }
            if(this.students.length < this.capacityOfStudents){
               this.students.push(student);
            }
            else {
                throw { message: "The full capacity of students has been reached" };
            }
        },
        /*
        *Will remove a student instance from class. Will remove all references to the same student 
        */
        removeStudent: function (student) {
            var len = this.students.length;
            for (var i = 0; i < len; i++) {
                if (this.students[i] === student) {
                    this.students.splice(i, 1);
                    i--;
                }
            }
        },
        listStudents: function () {
            var result = '';
            var len = 0;
            var i;

            if (!this.students) {
                result = 'No school-classes found.';
            }
            else {
                len = this.students.length;
                result += '{';
                for (i = 0; i < len; i++) {
                    result += ' ' + this.students[i].introduce() + ';';
                }
                result += '}';
            }

            return result;
        },
        toString: function () {
            var result = '|Class: ' + this.name + 
                ' Form teacher: ' + this.formTeacher.introduce() + ' Students:' +
                this.listStudents() + ' Capacity: ' + this.capacityOfStudents;

            return result;
        }
    };

    var School = {
        init: function (name, town) {
            this.name = name;
            this.town = town;
        },
        addClassStudents: function (classOfStudents) {
            if (!this.classes) {
                this.classes = [];
            }

            this.classes.push(classOfStudents);
        },
        removeClass: function (classOfStudents) {
            var len = this.classes.length;
            for (var i = 0; i < len; i++) {
                if (classOfStudents === this.classes[i]) {
                    this.classes.splice(i, 1);
                    i--;
                }
            }
        },
        listClasses: function () {
            var result = '';
            var len = 0;
            var i;

            if (!this.classes) {
                result = 'No school-classes found.';
            }
            else
            {                
                len = this.classes.length;
                for (i = 0; i < len; i++) {
                    result += this.classes[i].toString();
                }
            }

            return result;
        },
        toString: function () {
            var result = 'School Name:' + this.name + ' Town: ' + this.town;
            result += ' Classes:[ ' + this.listClasses() + ' ]'; 

            return result;
        }
    };

    var Repository = {
        save: function (schoolObject) {
            var schoolStrigified = JSON.stringify(schoolObject);
            var name = schoolObject.name;
            localStorage.setItem(name, schoolStrigified);
        },
        load: function (name) {
            var schoolString = localStorage.getItem(name);
            var schoolObj = JSON.parse(schoolString);

            return schoolObj;
        }
    };

    return {
        Student: Student,
        Teacher:Teacher,
        SchoolClass: SchoolClass,
        School: School,
        Repository: Repository
    }
})();

var Student = SchoolsRepositoryNS.Student;
var SchoolClass = SchoolsRepositoryNS.SchoolClass;
var School = SchoolsRepositoryNS.School;
var Teacher = SchoolsRepositoryNS.Teacher;

var joro = Object.create(Student);
joro.init('Georgi', 'Ivanov', 25, 5);
var ivan = Object.create(Student)
ivan.init('Petkan', 'Petkanski', 24, 3);
   
var petrov = Object.create(Teacher);
petrov.init('Kalin', 'Petrov', 41, 'HTML');
var aClass = Object.create(SchoolClass);
aClass.init('A', petrov, 10);

aClass.addStudent(joro);
aClass.addStudent(joro);
aClass.addStudent(ivan);
//removes both references to same student -> joro from list of students
aClass.removeStudent(joro); 

var kalinov = Object.create(Teacher);
kalinov.init('Kostadin', 'Kalinov', 65, 'Math');

var bClass = Object.create(SchoolClass);
bClass.init('B', kalinov, 15);
bClass.addStudent(joro);

var academy = Object.create(School);
academy.init('TSAcademy', 'sofia');
academy.addClassStudents(aClass);
console.log(academy.toString());

academy.addClassStudents(bClass);
console.log(academy.toString());

console.log('Original object:');
console.log(academy);
var nameOfAcademy = academy.name;
var repo = SchoolsRepositoryNS.Repository;
repo.save(academy);

var copiedAcademy = repo.load(nameOfAcademy);
console.log('Copied academy');
console.log(copiedAcademy);
