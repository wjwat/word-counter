// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return '';
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function (element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== textArray.length - 1) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

// UI Logic
$(document).ready(function () {
  $("form#word-counter").submit(function (event) {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);

    // New line of code below.
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});


let s = "Hi there hey yo Hi hi yay yo whoa there 89 whoa... yay!";
//let s = 'HI hi hI Hi'
let uniqueWordsInS = [];

s.split(' ').forEach(function(word) {
  if (!uniqueWordsInS.includes(word.toLowerCase())) {
    uniqueWordsInS.push(word.toLowerCase())
  }
})

console.log(uniqueWordsInS);

let wordsArray = [];

// test pass 
uniqueWordsInS.forEach(function(word) {
  wordsArray.push([numberOfOccurrencesInText(word, s), word])
})

sortedWordsArray = sortArrayAscendingTwoItems(wordsArray)

// test pass in arry of [1, b], [2, c], [99, d] ....
// result should be [99, d], [2, c]
function sortArrayAscendingTwoItems(arr) {
  let x = [...arr];
  return x.sort(function(a, b) {
    if (b[0] > a[0]) {
      return 1;
    } else {
      return 0;
    }
  })
}

console.log(wordsArray[0], wordsArray[1], wordsArray[2])


// let arr1 = [[2, 'hi'], [1, 'bye'], [5, 'shit'], [1000, 'blah']]
// let copy = [...arr1];

// console.log(arr1);

// copy.sort(function(a, b) {
//   return b[0] - a[0];
// })

// console.log(copy)



// thirdArray = [counted + "string", ]
// let countedWords, counterOfNumberOfOccurances = [];

// let z = [['a', 1], ['b', 2]]

// z.includes(['a', 1])

// s.split(' ').forEach(function(word) {
//   if (countedWords.includes(word)) {
//     counterOfNumberOfOccurances[countedWords.indexOf(word)] += 1;
//   } else {
//     countedWords.push(word);
//     counterOfNumberOfOccurances.push(1)
//   }
// })

// console.log(countedWords)
// console.log(counterOfNumberOfOccurances)

// break string into Array
// for each word in array count number of occurences
//   if # of occurences is greater than 0

// // Pseudo Code
// arrayOfStrings = ['a', 'b', 'c', ...]

// loop over arrayOfStrings
//   item 



//   largeString  broken into small string array

// for the first word of the array, check all the other words in the arrays and match, increase counter each time

// next increase the index number and loop again

// when index reaches (length) break out and do not continue

// Return 