function filter(...bannedWords) {
    return this.toString().replace(new RegExp(bannedWords.join("|"), "gi"),'').replace(/\s+/g,' ').trim();
}

function bubbleSort() {
    let l = this.length;
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l; j++) {
            if (this[j] > this[j + 1]) {
                let a = this[j];
                this[j] = this[j + 1];
                this[j + 1] = a;
            }
        }
    }
    return this;
};

Person = function() {};
Person.prototype.initialize = function(name, age) {
 this.name = name;
 this.age = age;
};

Person.prototype.describe = function() {
 return this.name + ", " + this.age + " years old.";
};

Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
    return `${this.name} is now teaching ${subject}`;
}

let teacher = new Teacher();
teacher.initialize("aa", 20);
console.log(teacher.teach("Inheritance"));

String.prototype.filter = filter;
Array.prototype.bubbleSort = bubbleSort;
