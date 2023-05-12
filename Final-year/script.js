document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'hidden') {
      // Change the tab title when the page is hidden
      document.title = "Come Back!";
    } else {
      // Restore the original tab title when the page is visible again
      document.title = "Miss you all";
    }
  });




  window.addEventListener('load', function() {
    // Get the audio element by its ID
    var audio = document.getElementById('myAudio');

    // Play the audio automatically when the page is visible
    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'visible') {
        audio.play();
      } else {
        audio.pause();
      }
    });
  });