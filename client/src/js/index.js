import { Workbox } from "workbox-window";
import { Tooltip, Toast, Popover } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Editor from "./editor";
import "./database";
//importing css
import "../css/style.css";
import Logo from "../images/logo.png";
const main = document.querySelector("#main");
main.innerHTML = "";

//adding in logos wiht DOM manipulation
window.addEventListener("load", function () {
  document.getElementById("logo").src = Logo;
});
const loadSpinner = () => {
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === "undefined") {
  loadSpinner();
}

// Check if service workers are supported
if ("serviceWorker" in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox("/src-sw.js");
  workboxSW.register();
} else {
  console.error("Service workers are not supported in this browser.");
}
