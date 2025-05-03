// Get the button element by its ID and add a click event listener
document.getElementById('btn').addEventListener('click', function () {
    // Get the text input value from the text field
    const text = document.getElementById('desc').value;

    // Check if the input is not empty (after trimming whitespace)
    if (text.trim() !== '') {
        // Create a new SpeechSynthesisUtterance object with the input text
        const utterance = new SpeechSynthesisUtterance(text);

        // Use the Web Speech API to speak the utterance
        window.speechSynthesis.speak(utterance);
    } else {
        // Show an alert if the input is empty
        alert('Please enter some text to convert to speech.');
    }
});