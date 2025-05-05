// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();

  /*
  HORN SELECTOR
  */

  // Attach an EventListener to the horn selector
  const hornSelector = document.querySelector('#horn-select');

  hornSelector.addEventListener('change', function() {
    // This code is ran when the there is change to which horn is selected

    // Get the individual horn selected from the selector
    const selectedHorn = hornSelector.value;

    // Depending on the horn selected, change the image and audio source
    switch (selectedHorn) { 
      case 'air-horn':
        document.querySelector('#expose img').src = 'assets/images/air-horn.svg';
        document.querySelector('audio').src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        document.querySelector('#expose img').src = 'assets/images/car-horn.svg';
        document.querySelector('audio').src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        document.querySelector('#expose img').src = 'assets/images/party-horn.svg';
        document.querySelector('audio').src = 'assets/audio/party-horn.mp3';
        break;
      default:
        console.log('No horn selected');    
    }
  })


  /*
  VOLUME CONTROLS
  */

  // When the volume slider is changed, update the volume of the audio element and the volume icon
  const volumeSlider = document.querySelector('#volume');
  const volumeImage = document.querySelector('#volume-controls img');

  volumeSlider.addEventListener('input', function() {
    // Get the volume value from the slider
    const volumeValue = volumeSlider.value;

    // Update the audio element's volume
    const audioElement = document.querySelector('audio');
    audioElement.volume = volumeValue / 100; // Convert to a value between 0 and 1

    // Update the volume icon based on the volume level
    if (volumeValue == 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeValue < 33) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeValue < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
    }
  })

  /*
  PLAY BUTTON
  */

  const playButton = document.querySelector('button');

  playButton.addEventListener('click', function() {
    // Get the audio element
    const audioElement = document.querySelector('audio');
    
    // Play the audio
    audioElement.play();

    // If the party horn is selected, show the confetti
    if (hornSelector.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  })
  

}