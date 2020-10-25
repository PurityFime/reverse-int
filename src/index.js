module.exports = function reverse (n) {
  let arr = n.toString().split('');
  let reversedArray = arr.reverse();
  let newStr = reversedArray.join('');
  let number = parseInt(newStr);
  return number;

}
