function solve() {
  const namingConventions = ['Camel Case', 'Pascal Case'];
  let fieldTextUsrInp = document.getElementById('text');
  let textToTransform = fieldTextUsrInp.value;
  console.log(textToTransform);
  let fieldTextNamingConvention = document.getElementById('naming-convention');
  let namingConventionRequest = fieldTextNamingConvention.value;
  console.log(namingConventionRequest);
  let fieldResult = document.getElementById('result');
  let resultOutput = '';

  if (namingConventions.includes(namingConventionRequest) === true) {
    let arrayTextToTransform = textToTransform.split(" ");
    console.log(arrayTextToTransform)
    for (let index=0; index<arrayTextToTransform.length; index++) {
      let currentWord = arrayTextToTransform[index];
      let wordToAdd = currentWord.toLowerCase();

      if (namingConventionRequest === 'Camel Case') {
        if (index == 0) {
          resultOutput += wordToAdd;
        }
        if (index !== 0) {
          resultOutput += wordToAdd.charAt(0).toUpperCase() + wordToAdd.slice(1);
        }
      }

      else if (namingConventionRequest === 'Pascal Case') {
        resultOutput += wordToAdd.charAt(0).toUpperCase() + wordToAdd.slice(1);;
      }
    }
  }

  else {
    resultOutput = 'Error!'
  }

  fieldResult.textContent = resultOutput;
}