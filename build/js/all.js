"use strict";

var myfun = function myfun() {
  return console.log('arrow function');
}; // myfun();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person =
/*#__PURE__*/
function () {
  function Person(name, yearOfBirth, work) {
    _classCallCheck(this, Person);

    this.name = name;
    this.work = work;
    this.yearOfBirth = yearOfBirth;
  }

  _createClass(Person, [{
    key: "age",
    value: function age() {
      return new Date().getFullYear() - parseInt(yearOfBirth);
    }
  }]);

  return Person;
}();

console.log(new Person('Aashu', 1993, 'Front end Developer'));
console.log(new Person('Pooja', 1994, 'Hoursewife'));
//# sourceMappingURL=all.js.map
