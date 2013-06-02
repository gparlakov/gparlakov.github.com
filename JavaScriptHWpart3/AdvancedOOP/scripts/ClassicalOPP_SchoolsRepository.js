if (!Object.create) {
    Object.create = function (obj) {
        var f = new function () { };
        f.protrotype = obj;
        return new f();
    };
}

var SchoolsRepositoryNS = (function () {
    var Class = (function () {
        var create = function (properties) {
            var newClass = function () {
                this.init.apply(this, arguments);
            };

            newClass.prototype = {};

            for (var prop in properties) {
                newClass.prototype[prop] = properties[prop];
            }

            if (!newClass.prototype.init) {
                newClass.prototype.init = function () { };
            }

            return newClass;
        };

        return {
            create: create
        }
    })();

    Function.prototype.inherit = function (parent) {
        var oldPrototype = this.prototype;
        var prototype = new parent;
        this.prototype = Object.create(prototype);
        this.prototype._super = prototype;
        for (var prop in oldPrototype) {
            this.prototype[prop] = oldPrototype[prop];
        }
    }

    var Person = Class.create({
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
    });

    var Student = Class.create({
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

    Student.inherit(Person);

    var Teacher = Class.create({
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

    Teacher.inherit(Person);

    var SchoolClass = Class.create({
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
    });

    var School = Class.create({
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
    });

    var Repository = Class.create({
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
    });

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

var joro = new Student('Georgi', 'Ivanov', 25, 5);
var ivan = new Student('Petkan', 'Petkanski', 24, 3);
   
var petrov = new Teacher('Kalin', 'Petrov', 41, 'HTML');
var aClass = new SchoolClass('A', petrov, 10);
aClass.addStudent(joro);
aClass.addStudent(joro);
aClass.addStudent(ivan);
//removes both references to sam student -> joro from list of students
aClass.removeStudent(joro); 

var kalinov = new Teacher('Kostadin', 'Kalinov', 65, 'Math');
var bClass = new SchoolClass('B', kalinov, 15);
bClass.addStudent(joro);

var academy = new School('TSAcademy', 'sofia');
academy.addClassStudents(aClass);
console.log(academy.toString());

academy.addClassStudents(bClass);
console.log(academy.toString());

aClass.addStudent(new Student('Dragan', 'Dragnev', 25, 6));
bClass.addStudent(new Student('Sansa', 'Stark', 15, 6));
bClass.addStudent(new Student('Arya', 'Stark', 9, 5));
aClass.addStudent(new Student('Maria', 'Magdalena', 18, 2));

console.log(academy.toString());

console.log('Original object:');
console.log(academy);
var nameOfAcademy = academy.name;
var repo = new SchoolsRepositoryNS.Repository();
repo.save(academy);

var copiedAcademy = repo.load(nameOfAcademy);
console.log('Copied academy');
console.log(copiedAcademy);
