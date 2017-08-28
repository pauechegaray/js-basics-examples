/**
 * Chapter 2 - JavaScript. Objects.
 * Fix the code
 *
 * What is wrong with the following code fragment?
 * Fix it!
 */
var studentA = {
  name     : 'Lalo landa'
  semester : 'VII',
  account  : 451235,
  grades   : [ 8, 6, 8, 9 ],
  emergencyContact : {
    name  : 'El macho'
    phone : 66729310
  }
};

var studentB = {
  name     : 'Beto botija',
  semester : 'I';
  account  : 431360,
  graes    : [ 10, 10, 9, 7 ]
};

console.log(studentA.name);
console.log(studentA['semster']);

console.log(averageGrade(studentA));

console.log(studentB.emergencyContact.name);
