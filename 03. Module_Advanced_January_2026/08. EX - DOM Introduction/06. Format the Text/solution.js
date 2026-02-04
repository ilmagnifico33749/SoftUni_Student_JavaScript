// function solve() {
//   let textAreaUsrInp = document.getElementById('input');
//   let textUsrInp = textAreaUsrInp.value;
//   let arrTextUsrInp = textUsrInp.split(".");
//   let outputArea = document.getElementById('output');

//   let finalTextOutput = '';
//   let currentParagraph = [];

//   for (let index = 0; index < arrTextUsrInp.length; index++) {
//     let currentSentence = arrTextUsrInp[index].trim();
    
//     if (currentSentence.length > 0) {


//       if (currentParagraph.length < 3) {
//         currentParagraph.push(`${currentSentence}.`);
//       }

      
//       if (currentParagraph.length === 3 || index === (arrTextUsrInp.length-1)) {
//         finalTextOutput += `<p>${currentParagraph.join(" ")}</p>\n`
//         currentParagraph = [];
//       }
//     }
//   }

//   outputArea.innerHTML = finalTextOutput;
// }
//==========================================================================================
function solve() {
  let textAreaUsrInp = document.getElementById('input');
  let textUsrInp = textAreaUsrInp.value;

  // Clean the array so the last real sentence is truly the last element
  let arrTextUsrInp = textUsrInp
      .split(".")
      .map(s => s.trim())
      .filter(s => s.length > 0);

  let outputArea = document.getElementById('output');

  let finalTextOutput = '';
  let currentParagraph = [];

  for (let index = 0; index < arrTextUsrInp.length; index++) {
    let currentSentence = arrTextUsrInp[index];

    if (currentParagraph.length < 3) {
      currentParagraph.push(currentSentence + ".");
    }

    if (currentParagraph.length === 3 || index === arrTextUsrInp.length - 1) {
      finalTextOutput += `<p>${currentParagraph.join(" ")}</p>\n`;
      currentParagraph = [];
    }
  }

  outputArea.innerHTML = finalTextOutput;
}
