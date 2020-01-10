"use strict";

var getRoundOf = function getRoundOf(num) {
  return console.log(parseInt(num / 10) * 10);
};

getRoundOf(43);
getRoundOf(31);
getRoundOf(59);
getRoundOf(65);

var checkRange = function checkRange(num) {
  var range0 = parseInt(num / 10);
  var range1 = range0 * 10 + 5;
  var range2 = range0 * 10 + 10;

  if (num >= range0 && num < range1) {
    return console.log("range is between ".concat(range0 * 10, " to ").concat(range1));
  } else if (num >= range1 && num < range2) {
    return console.log("range is between ".concat(range1, " to ").concat(range2));
  } else {
    return console.log("there is some issue with calculations.");
  }
};

checkRange(43);
checkRange(99);
checkRange(257);
checkRange(650);
checkRange(1);
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
      return new Date().getFullYear() - parseInt(this.yearOfBirth);
    }
  }]);

  return Person;
}();

var person1 = new Person('Aashu', 1993, 'Front end Developer');
var person2 = new Person('Pooja', 1994, 'Hoursewife');
console.log(person1);
console.log(person2); // Object.keys()

var family = {
  f: 'k',
  m: 'S',
  w: 'P',
  d: 'S'
};
console.log(Object.keys(family));
//# sourceMappingURL=all.js.map
