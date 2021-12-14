function stringLength(a) {
  if (a.length < 1) {
    return 'menor a 1';
  } else if (a.length > 10) {
    return 'mayor a 10';
  } else {
    return a.length;
  }
}
module.exports = stringLength;
