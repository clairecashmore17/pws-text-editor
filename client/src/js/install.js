const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Event handler for pre installation
window.addEventListener("beforeinstallprompt", (event) => {
  // Store the recently triggered event
  window.deferredPrompt = event;

  // Remove the hidden class from the button.
  butInstall.classList.toggle("hidden", false);
});

// adding an event listener to button for install
butInstall.addEventListener("click", async () => {
  // identify the prompt event
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }

  // Show the installation prompt
  promptEvent.prompt();

  // Set our prompt back to null so because it can only be used once
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// Handler for when the app is installed
window.addEventListener("appinstalled", (event) => {
  // Clear the deferred prompt so it sent to trash
  window.deferredPrompt = null;
});
