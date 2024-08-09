// List of English words with translations and examples
const englishWords = [
    { word: "apple", translation: "manzana", example: "I eat an apple." },
    { word: "book", translation: "libro", example: "This is my favorite book." },
    // Add more words up to 2000...
];

// List of Spanish words with translations and examples
const spanishWords = [
    { word: "manzana", translation: "apple", example: "Yo como una manzana." },
    { word: "libro", translation: "book", example: "Este es mi libro favorito." },
    // Add more words up to 2000...
];

// Elements for switching between languages
const learnEnglishBtn = document.getElementById('learn-english');
const learnSpanishBtn = document.getElementById('learn-spanish');
const languageTitle = document.getElementById('language-title');
const wordsContainer = document.getElementById('words-container');

// Event listeners for language selection
learnEnglishBtn.addEventListener('click', () => displayWords(englishWords, 'Learn English'));
learnSpanishBtn.addEventListener('click', () => displayWords(spanishWords, 'Learn Spanish'));

// Function to display words based on selected language
function displayWords(words, title) {
    languageTitle.textContent = title;
    wordsContainer.innerHTML = '';

    words.forEach(word => {
        const wordCard = document.createElement('div');
        wordCard.classList.add('word-card');
        wordCard.innerHTML = `
            <h3>${word.word}</h3>
            <p>Translation: ${word.translation}</p>
            <p>Example: ${word.example}</p>
        `;
        wordsContainer.appendChild(wordCard);
    });
}

// Tic-Tac-Toe Game Logic
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            // Add logic to check for a win or tie and reset the game
        }
    });
});
