function nonDecreasingSubset(arrInp) {
  var max = -Infinity;
  var result = arrInp.filter(num => num >= max && (max = num, true));
  console.log(result.join(" "));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);
