const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // use window to store our event
  window.deferredPrompt = addEventListener;
  //get rid of the hidden class in btn
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const Promptevent = window.deferredPrompt;
  // if no event found
  if (!Promptevent) {
    return;
  }
  Promptevent.prompt();

  //reset to null after prompt method invoked
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (e) => {
  // now we clear out the prompt
  window.deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {});
