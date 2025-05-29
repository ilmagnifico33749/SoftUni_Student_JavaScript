function solve(num) {
  result = `<div class="chessboard">\n`
  for (let i = 1; i <= num; i++) {
    result += ` <div>\n`;
    for (let j = 1; j <= num; j++) {
      if ((i + j) % 2 === 0) {
        result += `   <span class="black"></span>\n`;
      }
      else {
        result += `   <span class="white"></span>\n`;
      }
    }
    result += ` </div>\n`;
  }
  result += ` </div>\n`;
  console.log(result)
}

solve(3);
