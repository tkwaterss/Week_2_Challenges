const template =
  "The ${adjective} brown ${noun} ${adverb} " +
  "${verb} the ${adjective} yellow " +
  "${noun}, who ${adverb} ${verb} his " +
  "${noun} and looks around.";


const words = {
  adjective: ["quick", "lazy", "sleepy", "noisy", "hungry"],
  noun: ["fox", "dog", "head", "leg", "tail"],
  verb: ["jumps", "lifts", "bites", "licks", "pats"],
  adverb: ["easily", "lazily", "noisily", "excitedly"],
};

//look for each word type, target it and splice it out?

const madLib = (template, words) => {
  let wordTypeFound = true;
  let adjectiveTest = "${adjective}";
  let nounTest = "${noun}";
  let verbTest = "${verb}";
  let adverbTest = "${adverb}";

  const randomWord = (type) => {
    return type[Math.floor(Math.random() * type.length)];
  };

  while (wordTypeFound) {
    //look for a word type => if found replace with random word and set condition to true
    //if no word type found then set condittion to false
    if (template.includes(adjectiveTest)) {
        console.log(1)
      template = template.replace(adjectiveTest, randomWord(words.adjective));
    } else if (template.includes(nounTest)) {
        console.log(2)
      template = template.replace(nounTest, randomWord(words.noun));
    } else if (template.includes(verbTest)) {
        console.log(3)
      template = template.replace(verbTest, randomWord(words.verb));
    } else if (template.includes(adverbTest)) {
        console.log(4)
      template = template.replace(adverbTest, randomWord(words.adverb));
    } else {
        console.log(5)
      wordTypeFound = false;
    }
  }
  return template;
};

console.log(madLib(template, words));
