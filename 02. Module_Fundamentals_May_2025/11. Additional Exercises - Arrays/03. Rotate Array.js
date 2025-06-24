function rotateArray(arrInp) {
  let timesToRotate = arrInp.pop();
  console.log(timesToRotate);

  for (let rotations = timesToRotate; rotations > 0; rotations--) {
      let currentElement = arrInp.pop();
      arrInp.unshift(currentElement);
  }
  console.log(arrInp);
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
