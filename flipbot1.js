document.querySelector('.recognized').addEventListener('click', function() {
    var flashcard = document.querySelector('.flashcard');
    flashcard.style.transform = 'rotateY(180deg)';
    flashcard.addEventListener('transitionend', function() {
      var frontText = document.querySelector('.front');
      frontText.textContent = ' '; // Remove text from front side
    }, { once: true }); // Listen for transition end only once
  });

  document.querySelector('.mastered').addEventListener('click', function() {
    var flashcardWait = document.querySelector('.flashcard-wait');
    var waitColor = window.getComputedStyle(flashcardWait).backgroundColor;
    var flashcardMastered = document.querySelector('.flashcard');
    var masteredColor = window.getComputedStyle(flashcardMastered).backgroundColor;
    flashcardWait.style.backgroundColor = masteredColor;
    flashcardMastered.style.backgroundColor = waitColor;
    flashcardMastered.querySelector('.front').textContent = 'The process by which green plants and some other organisms use sunlight to synthesize carbon dioxide and water. Photosynthesis in plants generally involves the green pigment chlorophyll and generates oxygen as a by-product.';
  });

  document.querySelector('.not-recognized').addEventListener('click', function() {
    var flashcard = document.querySelector('.flashcard');
    flashcard.style.transform = 'rotateY(180deg)';
    flashcard.addEventListener('transitionend', function() {
      var frontText = document.querySelector('.front');
      frontText.textContent = ' '; // Remove text from front side
    }, { once: true }); // Listen for transition end only once
  });

var flashcardsWait = document.querySelectorAll('.flashcard-wait');

var flashcardTexts = [
  "The process by which green plants and some other organisms use sunlight to synthesize carbon dioxide and water. Photosynthesis in plants generally involves the green pigment chlorophyll and generates oxygen as a by-product.",
  "Programming as it is the process that models or structure the set of instructions that instruct the machine how to perform a task and what to perform",
  "Controlling someone or something to your own advantage, often unfairly or dishonestly Controlling someone or something to your own advantage, often unfairly or dishonestly",
];

flashcardsWait.forEach(function(flashcardWait, index) {
  flashcardWait.addEventListener('click', function() {
    var clickedColor = window.getComputedStyle(flashcardWait).backgroundColor;
    var clickedText = flashcardTexts[index]; 
    
    var flashcardMastered = document.querySelector('.flashcard');
    
    var masteredColor = window.getComputedStyle(flashcardMastered).backgroundColor;
    
    flashcardWait.style.backgroundColor = masteredColor;
    flashcardMastered.style.backgroundColor = clickedColor;
    
    flashcardMastered.querySelector('.front').textContent = clickedText;
  });
});


  
  