function ContextMenu() {}
/**
 * @param {MediaPlayer} player
 */
ContextMenu.prototype.run = function (player) {
  player.media.oncontextmenu = function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
  };
};

export default ContextMenu;
