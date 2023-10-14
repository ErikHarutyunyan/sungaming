// iframeContent.js (content loaded in the iframe)

let isTrackingProgress = false;

window.addEventListener("message", (event) => {
  if (event.data && event.data.startProgress) {
    isTrackingProgress = true;
    trackProgress();
  } else if (event.data && event.data.progress !== undefined) {
    // Log the progress to check if it's being received
    console.log("Received progress:", event.data.progress);
  }
});

function trackProgress() {
  if (isTrackingProgress) {
    // Simulated progress for demonstration purposes
    let progress = 0;
    const maxProgress = 100;

    const progressUpdate = () => {
      progress += 10; // Increment the progress

      if (progress >= maxProgress) {
        progress = maxProgress;
        isTrackingProgress = false; // Stop tracking once it reaches 100%
      }

      // Send progress updates to the parent document
      window.parent.postMessage({ progress }, "*");

      if (isTrackingProgress) {
        setTimeout(progressUpdate, 1000); // Update every 1 second (adjust as needed)
      }
    };

    // Start the progress updates
    progressUpdate();
  }
}
