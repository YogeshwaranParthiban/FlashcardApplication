const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the largest ocean?", answer: "Pacific Ocean" }
];

let currentCardIndex = 0;

const flashcardElement = document.getElementById('flashcard');
const frontElement = document.getElementById('front');
const backElement = document.getElementById('back');
const nextBtn = document.getElementById('nextBtn');
const flipBtn = document.getElementById('flipBtn');

function showCard(index) {
    if (index < 0 || index >= flashcards.length) return;
    frontElement.textContent = flashcards[index].question;
    backElement.textContent = flashcards[index].answer;
    flashcardElement.classList.remove('flipped');
}

function flipCard() {
    flashcardElement.classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    showCard(currentCardIndex);
}

flipBtn.addEventListener('click', flipCard);
nextBtn.addEventListener('click', nextCard);

// Initialize the first card
showCard(currentCardIndex);