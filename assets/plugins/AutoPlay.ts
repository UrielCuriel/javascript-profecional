import MediaPlayer, { MediaPlugin } from "../MediaPlayer";

class AutoPlay implements MediaPlugin {
  constructor() {}

  run(player: MediaPlayer) {
    if (!player.muted) {
      player.muted = true;
    }
    player.play();
  }
}

export default AutoPlay;
