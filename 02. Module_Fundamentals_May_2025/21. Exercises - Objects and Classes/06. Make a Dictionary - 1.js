function dictionary(arrInpJson) {
  let listDictionary = [];
  class Word {
    constructor(term, definition) {
      this.term = term;
      this.definition = definition;
    }
  }

  for (let element of arrInpJson) {
    let currentElementObject = JSON.parse(element);
    let elementEntries = Object.entries(currentElementObject);
    for ([key, value] of elementEntries) {
      let currentWordTerm = key;
      let currentWordDefinition = value;
      let newWord = new Word(currentWordTerm, currentWordDefinition);
      let present = false;
      for (let wordObject of listDictionary) {
        if (wordObject.term == currentWordTerm) {
          present = true;
          wordObject.definition = value;
          break;
        }
      }
      if (present == false) {
        listDictionary.push(newWord);
      }
    }
  }

  listDictionary.sort((a, b) => a.term.localeCompare(b.term)); 

  for (let wordObject of listDictionary) {
    let [wordTerm, wordDefinition] = Object.values(wordObject); 
    console.log(`Term: ${wordTerm} => Definition: ${wordDefinition}`);
    }
}

dictionary(
  [
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}', 
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}', 
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}', 
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
  ]
);
dictionary(
  [
   '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}', 
   '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ', 
   '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ', 
   '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ', 
   '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ' 
  ]
);
