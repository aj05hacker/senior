document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'hidden') {
      // Change the tab title when the page is hidden
      document.title = "Come Back!";
    } else {
      // Restore the original tab title when the page is visible again
      document.title = "Miss you all";
    }
  });