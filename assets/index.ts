import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import ContextMenu from "./plugins/ContextMenu";
const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new ContextMenu(), new AutoPause()],
});

const playButton: HTMLButtonElement = document.querySelector("#playButton");
playButton.onclick = () => player.togglePlay();
const fullButton: HTMLButtonElement = document.querySelector("#fullButton");
fullButton.onclick = () => player.fullScreen();

const muteButton: HTMLButtonElement = document.querySelector("#muteButton");
muteButton.onclick = () => {
  if (player.muted) {
    player.muted = false;
  } else {
    player.muted = true;
  }
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .catch((error) => console.log(error));
}
