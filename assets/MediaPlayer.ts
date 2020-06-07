export interface MediaPlugin {
  run(player: MediaPlayer): void;
}

class MediaPlayer {
  media: HTMLVideoElement;
  private plugins: Array<MediaPlugin>;
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
  }
  private _initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
  /**
   * Reproducir
   */
  play() {
    this.media.play();
  }
  /**
   * Pausar
   */
  pause() {
    this.media.pause();
  }
  /**
   * Mutear
   */
  get muted() {
    return this.media.muted;
  }
  set muted(value) {
    this.media.muted = value;
  }
  /**
   * Cambiar estado de reproducción
   */
  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  /**
   * FullScreen
   */
  fullScreen() {
    this.media.controls = false;
    if (this.media.requestFullscreen) {
      this.media.requestFullscreen();
    } else if (this.media.webkitEnterFullScreen) {
      this.media.webkitEnterFullScreen();
    }
  }
}

export default MediaPlayer;
