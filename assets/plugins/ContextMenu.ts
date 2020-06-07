import { MediaPlugin } from "../MediaPlayer";
class ContextMenu implements MediaPlugin {
  constructor() {}
  run(player) {
    player.media.oncontextmenu = function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    };
  }
}

export default ContextMenu;
