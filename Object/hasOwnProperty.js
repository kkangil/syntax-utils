/**
 * Object​.prototype​.has​OwnProperty()
 * 
 * 객체가 해당 키값을 가지고 있는지 판단하여 boolean 값 리턴
 */

o = new Object();
o.prop = 'exists';

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty('prop');   // returns true
changeO();
o.hasOwnProperty('prop');   // returns false