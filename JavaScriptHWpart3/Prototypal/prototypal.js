if (!Object.prototype.extend) {
    Object.prototype.extend = function (properties) {
        function f() { };
        f.prototype = Object.create(this);
        for (var prop in properties) {
            f.prototype[prop] = properties[prop];
        }
        f.prototype._super = this;
        return new f();
    }
}

if (!Object.create) {
    Object.create = function (obj) {
        function f() { };
        f.prototype = obj;
        return new f();
    }
}

(function () {
    this.Person = {
        init: function (firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.fullName = firstName + " " + lastName;
        },
        introduce: function () {
            var result = [];
            result.push("Name: " + this.fullName);
            result.push("Age: " + this.age);

            return result.join(", ");
        }
    };

    this.Teacher = Person.extend({
        init: function (firstName, lastName, age, speciality) {
            this._super = Object.create(this._super);
            this._super.init(firstName, lastName, age);
            this.speciality = speciality;
        },
        introduce: function () {
            return this._super.introduce() + ", Speciality: " + this.speciality;
        }
    });

    this.Student = Person.extend({
        init: function (firstName, lastName, age, grade) {
            this._super = Object.create(this._super);
            this._super.init(firstName, lastName, age);
            this.grade = grade;
        },
        introduce: function () {
            return this._super.introduce() + ", Grade: " + this.grade;
        }
    });

    this.School = {
        init: function (name, town, classes) {
            this.name = name;
            this.town = town;
            this.classes = classes;
        },
        toString: function () {
            var result = [];
            var classesCount = this.classes.length;

            result.push("Name: " + this.name + "\n");
            result.push("Town: " + this.town + "\n");
            result.push("Classes:\n");

            for (var i = 0; i < classesCount; i+=1) {
                result.push(this.classes[i].toString());
            }
            
            return result.join("")
        }
    };

    this.Class = {
        init: function (name, teacher, students, capacity) {
            this.name = name;
            this.teacher = teacher;
            this.students = students;
            this.capacity = capacity;
        },
        toString: function () {
            var result = [];
            var studentsCount = this.students.length;
            var offset = "     ";
            result.push(this.name + " with teacher: " + this.teacher.introduce() + "\n");

            for (var i = 0; i < studentsCount; i += 1) {
                result.push(offset + this.students[i].introduce() + "\n");
            }

            return result.join("")
        }
    };

    return {
        Person: Person,
        Teacher: Teacher,
        School: School,
        Class: Class
    }
}())