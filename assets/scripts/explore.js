// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const voiceSelect = document.querySelector('#voice-select');

  // Function to populate the voice options
  function populateVoiceList() {
    const voices = speechSynthesis.getVoices();

    // Clear existing options (if any)
    // voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    // Populate the select element with available voices
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index; // Use the index as the value
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) {
        option.textContent += ' [Default]';
      }
      voiceSelect.appendChild(option);
    });
  }

  // Populate the voice list when voices are loaded
  populateVoiceList();
  speechSynthesis.onvoiceschanged = populateVoiceList;


  

  const talkButton = document.querySelector('button');
  const smileImg = document.querySelector('img');

  talkButton.addEventListener('click', function() {
    // Get the selected voice index from the dropdown
    const selectedVoiceIndex = voiceSelect.value;
    const voices = speechSynthesis.getVoices();

    // Get the message from the text area
    const message = document.querySelector('#text-to-speak').value;
    const utterance = new SpeechSynthesisUtterance(message);

    // Set the selected voice
    utterance.voice = voices[selectedVoiceIndex];

    // Change the image at the start of the speech
    utterance.addEventListener('start', function() {
      smileImg.src = 'assets/images/smiling-open.png'; // Replace with the path to your "speaking" image
    });

    // Revert the image back once the speech is done
    utterance.addEventListener('end', function() {
      smileImg.src = 'assets/images/smiling.png'; // Replace with the path to your default "smile" image
    });


    // Speak the utterance
    speechSynthesis.speak(utterance);
  });

 
}