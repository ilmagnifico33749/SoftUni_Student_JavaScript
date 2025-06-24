function rotateArray(arrInp) {
  let timesToRotate = arrInp.pop();

  for (let rotations = timesToRotate; rotations > 0; rotations--) {
      let currentElement = arrInp.pop();
      arrInp.unshift(currentElement);
  }
  console.log(arrInp.join(" "));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
