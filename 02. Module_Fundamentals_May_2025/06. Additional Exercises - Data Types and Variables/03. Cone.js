function solve(radius, height) {
  let coneVolume = (1/3) * Math.PI * Math.pow(radius, 2) * height;;
  let coneSlantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
  let coneArea = Math.PI * radius * (radius + coneSlantHeight);
  
  console.log(`volume = ${coneVolume.toFixed(4)}`);
  console.log(`area = ${coneArea.toFixed(4)}`);
}

solve(3, 5);
solve(3.3, 7.8);
