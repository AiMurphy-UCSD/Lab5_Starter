// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // Attach an EventListener to the horn selector
  const hornSelector = document.querySelector('#horn-select');

  hornSelector.addEventListener('change', function() {
    // This code is ran when the there is change to which horn is selected

    // Get the individual horn selected from the selector
    const selectedHorn = hornSelector.value;

    // Depending on the horn selected, change the image and audio source
    switch (selectedHorn) { 
      case 'air-horn':
        document.querySelector('img').src = 'assets/images/air-horn.svg';
        document.querySelector('audio').src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        document.querySelector('img').src = 'assets/images/car-horn.svg';
        document.querySelector('audio').src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        document.querySelector('img').src = 'assets/images/party-horn.svg';
        document.querySelector('audio').src = 'assets/audio/party-horn.mp3';
        break;
      default:
        console.log('No horn selected');    
    }
  })
}